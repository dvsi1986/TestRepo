
public class TestField {
	int x; //100
	int y; //200

	public void doStuff(int x, int y) {
		this.x = x;
		y = this.y;
	}

	public void display() {
		System.out.print(x + " " + y + " : ");
	}

	public static void main(String[] args) {
		TestField m1 = new TestField();
		m1.x = 100;
		m1.y = 200;
		TestField m2 = new TestField();
		m2.doStuff(m1.x, m1.y);
		m1.display();
        m2.display();
	}

}
