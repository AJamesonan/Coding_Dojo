
public class BankAccounts{
    private double checkingBalance;
    private double savingsBalance;
    public static int numberOfAccounts;
    public static double totalMoney;

    public BankAccounts(){
        checkingBalance = 0;
        savingsBalance = 0;
        numberOfAccounts += numberOfAccounts;
    }

    public BankAccounts(double checkingBalance , double savingsBalance){
        numberOfAccounts += numberOfAccounts;
        double add = checkingBalance + savingsBalance;
        updateTotalMoney(add);
        this.checkingBalance = checkingBalance;
        this.savingsBalance = savingsBalance;
    }

// Getters

    public double getBalanceChecking(){
        return this.checkingBalance;
    }

    public double getBalanceSavings(){
        return this.savingsBalance;
    }

    public double userTotal(){
        double userTotal = checkingBalance + savingsBalance;
        return userTotal;
    }

// Setters
public void checkingDeposit(double deposite){
    checkingBalance += deposite;
    updateTotalMoney(deposite);
    System.out.printf("You now have %s in your Checking Account. ", checkingBalance);
}
public void savingsDeposit(double deposite){
    savingsBalance += deposite;
    updateTotalMoney(deposite);
    System.out.printf("You now have %s in your Savings Account. ", savingsBalance);
}

private static void updateTotalMoney(double deposite){
    totalMoney += deposite;
    System.out.println("money total = " + totalMoney);
}

public void withdrawChecking(double amount){
    if(amount <= checkingBalance){
        checkingBalance -= amount;
        amount = amount*-1;
        System.out.println("amount withdrawn" + amount);
        updateTotalMoney(amount);
    }
    else{
        System.out.println("Insufficient funds");
    }
}

}