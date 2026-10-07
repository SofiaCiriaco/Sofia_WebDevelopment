package User_Registration_System;

import java.util.Scanner;

public class UserRegistration {
    public static void main(String[] args) {
        String password = "novastar875902"; 
        Scanner scn = new Scanner(System.in);

        System.out.println("PLEASE ENTER PASSWORD: ");
        String pInput = scn.nextLine();

        do { 
            if(!pInput.equals(password)){
                System.out.println("WRONG PASSWORD! PLEASE TRY AGAIN.");
            }

            if(pInput.equals(password)){
                System.out.println("ACCESS GRANTED!");
                break;
            }

            else{
                System.out.println("ACCESS GRANTED!");
                break;
            }

            String username = "novastar";
            Scanner scn2 = new Scanner(System.in);

            System.out.println("PLEASE ENTER USERNAME: ");
            pInput = scn2.nextLine();

            if(!pInput.equals(username)){
                System.out.println("WRONG USERNAME! PLEASE TRY AGAIN.");
            }

            else{
                System.out.println("ACCESS GRANTED!");
                break;
            }
        } 
        while (!pInput.equals(username));

        
    }
}