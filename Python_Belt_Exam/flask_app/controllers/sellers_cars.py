from flask import render_template,redirect,request,session,flash
from flask_app import app
import re	
from flask_app.models.seller import Seller
from flask_app.models.car import Car
from flask_bcrypt import Bcrypt
bcrypt = Bcrypt(app)

@app.route('/')
def login_page():
    return render_template('login.html')


@app.route('/register', methods=['POST'])
def register():
    dbdata = {
        'email': request.form['email']
    }
    seller_in_db = Seller.get_by_email(dbdata)
    if seller_in_db:
        flash('*email is taken*')
        return redirect ('/')
    # validate seller
    if Seller.validate_seller(request.form):
        print('registration passes')
        pw_hash = bcrypt.generate_password_hash(request.form['password'])
        print(pw_hash)
        data = {
            'first_name': request.form['first_name'],
            'last_name': request.form['last_name'],
            'email': request.form['email'],
            'password': pw_hash 
        }
        # Call the save @classmethod on seller// saves info in db
        seller_id = Seller.save(data)
        # store seller id into session
        session['seller_id'] = seller_id
        print(seller_id)
        return redirect('/cars')
    else:
        print('validation failed')
        flash('validation failed')
        return redirect('/')

@app.route('/login', methods=['POST'])
def login():
    data = {
        'email': request.form['email']
    }
    seller_in_db = Seller.get_by_email(data)
    if not seller_in_db:
        flash('*email/password invalid*')
        return redirect ('/')
    if not bcrypt.check_password_hash(seller_in_db.password, request.form['password']):
        flash("Invalid Email/Password")
        return redirect('/')
    # session['first_name'] = seller.get_by_email(data)
    session['seller_id'] = seller_in_db.id
    session['first_name'] = seller_in_db.first_name
    print(seller_in_db.id)
    print(seller_in_db)
    print('$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$')
    return redirect('/cars')


@app.route('/')
def logged_in():
    if 'seller_id' not in session:
        flash('log in to view page')
        return redirect('/')
    
    return redirect('/cars')

@app.route('/logout')
def logout():
    session.clear()
    return redirect('/')

    ###############seller's cars page######################
@app.route('/cars')
def seller_cars():
    if 'seller_id' not in session:
        flash('log in to view page')
        return redirect('/')
    list_cars = Car.get_cars_and_sellers()
    return render_template('index.html', cars = list_cars)

    ############################################Add Car for Sale##############
@app.route('/car/new')
def new_car():
    if 'first_name' not in session:
        return redirect ('/')
    return render_template('add_car.html')

@app.route('/add/car', methods = ['POST'])
def create_car():
    if Car.car_is_valid(request.form):
        print('car is valid')
        seller_data = {
            'id': session['seller_id']
        }
        current_seller = Seller.get_seller_by_id(seller_data)
        car_data = {
                'price' : request.form['price'],
                'model' : request.form['model'],
                'make': request.form['make'],
                'year': request.form['year'],
                'description': request.form['description'],
                'seller': current_seller.first_name,
                'sellers_id' : session['seller_id']
            }
        Car.save_car(car_data)
        return redirect('/cars')
    else:
        print('ya blew it')
        flash('validation failed')
        return redirect('/car/new')

###################show car info######################
@app.route('/car/<int:id>')
def show_car(id):
    if 'first_name' not in session:
        return redirect ('/')
    data = {
        'id': id
    }
    car = Car.get_car_by_id(data)
    return render_template('view_car.html', car = car)

###############edit info###################
@app.route('/edit/car/<int:id>')
def edit_car(id):
    if 'first_name' not in session:
        return redirect ('/')
    data = {
        'id':id
    }
    car = Car.get_car_by_id(data)
    return render_template('edit_car.html', car = car)

    ###############delete###########
@app.route('/cars/delete/<int:id>')
def delete_car(id):
    data = {
        'id': id
    }
    Car.delete_one(data)
    return redirect('/cars')

    ##############purchase###########
@app.route('/cars/purchase/<int:id>')
def purchase(id):
    data = {
        id
    }
    
    Car.change_car_to_sold(data)
    return redirect('/cars')