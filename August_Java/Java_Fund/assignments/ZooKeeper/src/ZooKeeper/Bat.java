package ZooKeeper;

public class Bat extends Mammal {
	
	public Bat() {
		energyLevel = 300;
	}
	
	public void fly() {
		int energy = this.getEnergyLevel()-50;
		this.setEnergyLevel(energy);
		System.out.println("Whooosh!!!! Energy level is now" + energy);
	}
	
	public void eatHumans() {
	int energy = this.getEnergyLevel()+25;
	this.setEnergyLevel(energy);
	System.out.println("Human pulation control is in full swing. Energy is now "+ energy);
	}
	
	public void attackTown() {
		int energy = this.getEnergyLevel()-100;
		this.setEnergyLevel(energy);
		System.out.println("Blat Blat, there goes the town. Energy is "+ energy);
	}
	
	}
