import java.util.ArrayList;

public class Order {
    private String name;
    private boolean ready;
    private ArrayList<Item>items;

    // Setters
    public void addOrder(String name){
        this.name = name;
    }
    public void isReady(boolean name){
        this.name = name;
    }

    public void addOrder(){
        this.name = "Guest";
        ArrayList<Item> items = new ArrayList<Item>();
    }

    // getters
    public String getName(){
        return name;
    }
    public boolean checkIsReady(){
        return ready;
    }
    public ArrayList<Item> getItems(){
        return items;
    }

    // Methods
    public String addItem(){
        
    }
}
