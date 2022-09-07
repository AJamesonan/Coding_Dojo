from flask_app.config.mysqlconnection import MySQLConnection, connectToMySQL

from flask import flash
from flask_app import app

from flask_bcrypt import Bcrypt 
bcrypt = Bcrypt(app) 
import re	
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

class Seller:
    def __init__(self, data):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.email = data['email']
        self.password = data ['password']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    @staticmethod
    def validate_seller(seller):
        is_valid = True
        if len(seller['first_name']) < 3:
            flash("First name must be 3 or more characters.")
            is_valid = False
        if len(seller['first_name']) > 50:
            flash("First name must be less than 50 characters.")
            is_valid = False
        if len(seller['last_name']) < 3:
            flash("Last name must be 3 or more characters.")
            is_valid = False
        if len(seller['last_name']) > 50:
            flash("Last name must be less than 50 characters.")
            is_valid = False
        if not EMAIL_REGEX.match(seller['email']): 
            flash("Invalid email address!")
            is_valid = False
        # if len(seller.get_by_email(seller)) != 0:
        #     is_valid = False
        #     flash('Account already associated with given email')
        if len(seller['password']) < 7:
            flash('*Password must be 8 or more characters*')
            is_valid = False
        if seller['password'] != seller['confirm_password']:
            is_valid = False
            flash('*Passwords must match*')
        return is_valid


    @classmethod
    def save(cls,data):
        query = "INSERT INTO sellers (first_name, last_name, email, password) VALUES (%(first_name)s, %(last_name)s, %(email)s, %(password)s);"
        result = connectToMySQL("car_deal_schema").query_db(query, data)

        return result

    @classmethod
    def get_by_email(cls,data):
        query = 'SELECT * FROM sellers WHERE email = %(email)s;'
        results = connectToMySQL('car_deal_schema').query_db(query, data)
        
        if len(results) < 1:
            return False
        else:
            return cls(results[0])

    @classmethod
    def get_all_sellers():
        query = 'SELECT * FROM sellers;'
        results = connectToMySQL('car_deal_schema').query_db(query)
        sellers = []
        for seller in results: #maybe useless??
            sellers.append(seller)
        return results

    @classmethod
    def get_seller_by_id(cls,data):  #use in create car
        query = 'SELECT * FROM sellers WHERE id = %(id)s;'
        results = connectToMySQL('car_deal_schema').query_db(query, data)
        return cls(results[0])