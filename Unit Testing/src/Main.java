public class Main {
    public static void main(String[] args) {
        System.out.println(String.format("%s-%s", "juan", "60095656"));

        String cadena="juanpacarrillo1gmail.com";

        // ejemplo1: devolvera false, ya que la cadena tiene mas caracteres
        //System.out.println("ejemplo1: "+cadena.matches("Solo"));

        // ejemplo2: devolvera true, siempre y cuando no cambiemos la cadena @
        System.out.println("ejemplo2: "+!cadena.matches(".*[@].*"));


    }
}
