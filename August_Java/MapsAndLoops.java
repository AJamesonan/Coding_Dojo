import java.util.HashMap;
public class MapsAndLoops {
    public static void main( String args[]){
        HashMap<String, String> studentHash = new HashMap<String, String>();

        studentHash.put("alex@miller.com", "Alex Miller");
        studentHash.put("bill@miller.com", "Bill Miller");
        studentHash.put("alex@bjorn.com", "Alex Bjorn");

        String Bill = studentHash.get("bill@miller.com");
        System.out.println( studentHash);
        System.out.println( studentHash);
    }
}
