public class BankAccountsTest {
    public static void main(String[] args){
        
        BankAccounts user1 = new BankAccounts();

        System.out.println(user1.getBalanceChecking());
        user1.checkingDeposit(200.00);
        System.out.println("$$$$$$$$$$$$$$$$$$$$$$");
        
        BankAccounts user2 = new BankAccounts(500.00 ,  40.00);
        System.out.println(user2.getBalanceChecking());
        user2.withdrawChecking(80);

    }
}
