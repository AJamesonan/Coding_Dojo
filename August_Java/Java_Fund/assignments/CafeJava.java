public class CafeJava{
    public static void main(String[] args){
        String generalGreeting = "Welcome to Cafe Java, ";
        String pendingMessage = ", your order will be ready shortly";
        String readyMessage = ", your order is ready";
        String displayTotalMessage = "Your total is $";

        double mochaPrice = 3.5;
        double dripCoffeePrice = 2.5;
        double lattePrice = 3.0;
        double cappuccinoPrice = 4.5;

        double tot;

        String customer1 = "Cindhuri";
        String customer2 = "Sam";
        String customer3 = "Jimmy";
        String customer4 = "Noah";

        boolean isReadyOrder1 = false;
        boolean isReadyOrder2 = true;
        boolean isReadyOrder3 = false;
        boolean isReadyOrder4 = true;

        System.out.println(generalGreeting + customer1);
        if(isReadyOrder1){
            System.out.println(displayTotalMessage + dripCoffeePrice + readyMessage);
        }
        else{
            System.out.println( displayTotalMessage + dripCoffeePrice + pendingMessage);
        }
        System.out.println(generalGreeting + customer4);
        if(isReadyOrder4){
            System.out.println(displayTotalMessage + cappuccinoPrice + readyMessage);
        }
        else{
            System.out.println( displayTotalMessage + cappuccinoPrice + pendingMessage);
        }
        System.out.println(generalGreeting + customer2);
        if(isReadyOrder2){
            tot = lattePrice + lattePrice;
            System.out.println(displayTotalMessage + tot+ readyMessage);
        }
        else{
            tot = lattePrice + lattePrice;
            System.out.println( displayTotalMessage + tot + pendingMessage);
        }
        System.out.println(generalGreeting + customer3);
        if(isReadyOrder4){
            tot = lattePrice - dripCoffeePrice;
            System.out.println(displayTotalMessage + tot + readyMessage);
        }
        else{
            tot = lattePrice - dripCoffeePrice;
            System.out.println( displayTotalMessage + tot + pendingMessage);
        }
    }
}