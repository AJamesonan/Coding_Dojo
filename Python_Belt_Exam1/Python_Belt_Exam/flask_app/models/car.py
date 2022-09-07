from flask_app.config.mysqlconnection import MySQLConnection, connectToMySQL

from flask import flash
from flask_app import app
from flask_app.models.seller import Seller
from flask_bcrypt import Bcrypt 
bcrypt = Bcrypt(app) 
import re	
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')


class Car:
    def __init__(self,data):
        self.id = data['id']
        self.price = data['price']
        self.model = data['model']
        self.make = data['make']
        self.year = data['year']
        self.description = data['description']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        self.seller = data['seller']

    @staticmethod
    def car_is_valid(car):
        is_valid = True
        if car['price'] == 0:
            flash('price must be greater than $0.')
            is_valid = False
        if car['model'] == "":
            flash('Give car model information')
            is_valid = False
        if car['make'] == "":
            flash('Give car make information')
            is_valid = False
        if car['year'] == 0:
            flash('select car year')
            is_valid = False
        if car['description'] == "":
            flash('please add a discription of vehicle condition')
        return is_valid
        



    @classmethod
    def get_cars_by_sellers_id(cls, data):
        query = 'SELECT * FROM cars WHERE sellers_id=%(sellers_id)s;'
        results = connectToMySQL('car_deal_schema').query_db(query,data)
        cars = []
        for car in results:
            cars.append(cls(car))
        return cars

    @classmethod
    def save_car(cls,data):
        query = "INSERT INTO cars (price, model,make, year, description, seller, sellers_id) VALUES (%(price)s, %(model)s,%(make)s, %(year)s, %(description)s, %(seller)s, %(sellers_id)s);"
        connectToMySQL("car_deal_schema").query_db(query, data)
        return

    @classmethod
    def get_car_by_id(cls,data):
        query = 'SELECT * FROM cars WHERE id = %(id)s'

        results = connectToMySQL("car_deal_schema").query_db(query, data)
        
        return cls(results[0])

    @classmethod
    def get_cars_and_sellers(cls):
        query = 'SELECT * FROM cars JOIN sellers ON sellers_id = sellers.id;'
        results =  connectToMySQL('car_deal_schema').query_db(query)
        list_cars = []
        for row in results:
            current_car = cls(row)
            seller_data = {
                'id' : row['sellers.id'],
                'first_name' : row['first_name'],
                'last_name' : row['last_name'],
                'email' : row['email'],
                'password' : row ['password'],
                'created_at' : row['sellers.created_at'],
                'updated_at' : row['sellers.updated_at']
            }
            current_seller = Seller(seller_data)
            current_car.seller = current_seller
            list_cars.append(current_car)
        return list_cars

    @classmethod
    def update_one(cls,data):
        query = 'UPDATE cars SET price = %(price)s, model = %(model)s, year = %(year)s, description = %(description)s, sellers_id = %(sellers_id)s WHERE id = %(id)s;'
        return connectToMySQL('car_deal_schema').query_db(query,data)

    classmethod
    def delete_one(data):
        query = 'DELETE FROM cars WHERE id = %(id)s;'
        return connectToMySQL('car_deal_schema').query_db(query,data)