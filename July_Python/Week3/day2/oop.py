class User:
    def __init__(self, first_name, last_name, email, age, is_rewards_member= False, gold_card_points= 0):
        self.first_name = first_name
        self.last_name = last_name
        self.email = email
        self.age = age
        self.is_rewards_member = is_rewards_member
        self.gold_card_points = gold_card_points

    def display_info(self):
        print(self.first_name)
        print(self.last_name)
        print(self.email)
        print(self.age)
        print(self.is_rewards_member)
        print(self.gold_card_points)
    
    def enroll(self):
        if self.is_rewards_member == True:
            print('User already a member')
        else:
            self.is_rewards_member = True
            self.gold_card_points = 200

    def spend_points(self,amount):
        if amount <= self.gold_card_points:
            self.gold_card_points -= amount
        else:
            print("You are broke")

Bob = User('Bob','Syoruncle','email@here',67,False,0)
Bob.display_info()