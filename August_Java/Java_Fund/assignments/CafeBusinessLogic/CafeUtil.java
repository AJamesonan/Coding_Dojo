// import java.text.Format;
import java.util.ArrayList;
// import java.util.Arrays;
public class CafeUtil {
    public int getStreakGoal(){//returns 0 instead of 55
        int sum = 0;
        int i = 0;
        while(i <= 10){
            sum += i;
            i++;
        }
        return sum;
    }
    public int getStreakGoal(int numweeks){
        int sum = 0;
        int i = 0;
        while(i <= numweeks){
            sum += i;
            i++;
        }
        return sum;
    }

    public double getOrderTotal( double[] lineItems){
        double total = 0;
        for(double items : lineItems ){
            total = items + total;
        }
        return total;
    }

    public void displayMenu(ArrayList<String> menuItems){
        for (int i = 0; i < menuItems.size(); i++){
            System.out.println( i + " "+ menuItems.get(i));
        }
    }

    public void addCustomer(ArrayList<String> customers){
        System.out.println( "Please enter your name:");
        String userName = System.console().readLine();
        System.out.printf("Hello, %s!%n", userName);
        System.out.printf("There are %s people in front of you.%n",customers.size());
        customers.add(userName);
        for (int i = 0; i < customers.size(); i++){
            System.out.println(customers.get(i));
        }
    }
}
