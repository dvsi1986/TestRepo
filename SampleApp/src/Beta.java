class Alpha {
	public void foo() {
		System.out.print("Afoo ");
	}
}

public class Beta extends Alpha {

	public static void main(String[] args) {
		String s1= "123";
		StringBuffer sb= new StringBuffer("123");
		s1=s1.concat("abc");
		sb.append("abc");
		System.out.println(sb+" "+s1);
		System.out.println(s1);
		System.out.println(sb);
	}
}