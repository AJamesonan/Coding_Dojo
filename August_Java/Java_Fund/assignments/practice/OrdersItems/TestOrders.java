
import java.util.ArrayList;
public class TestOrders {
    public static void main(String[] args) {
    
        Item item1 = new Item();
        item1.name = "Mocha";
        System.out.println();
        Item item2 = new Item();
        item2.addItem("latte", 2.50);  
        Item item3 = new Item();
        item3.addItem("drip-coffee", 8.50);
        Item item4 = new Item();
        item4.addItem("capuccino", 4.75);
        // Order variables -- order1, order2 etc.
        Order order1 = new Order();
        order1.name = "Cindy"; 
        
        Order order2 = new Order();
        order2.name = "Jimmy"; 
        Order order3 = new Order();
        order3.name = "Noah"; 
        Order order4 = new Order();
        order4.name = "Sam"; 
        // Application Simulations
        // Use this example code to test various orders' updates
        // System.out.printf("Name: %s\n", order1.name);
        // System.out.printf("Total: %s\n", order1.total);
        // System.out.printf("Ready: %s\n", order1.ready);
    }
}

