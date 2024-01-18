export class ValidationExp {
    public static nameValidation = "^[A-Za-z]{3,}(?: [A-Za-z]+)*$";

    public static emailValidation = "^[A-Za-z0-9.]*[A-Za-z][A-Za-z0-9.]*@[A-Za-z0-9.]+\.[A-Za-z]{2,}$";

    // public static numberValidation = "^((\\+91-?)|0)?[0-9]{6,15}$";
    public static numberValidation = "^((\\+91-?)|0)?[0-9]$";

    // public static companyValidation = "^[A-Za-z]";
    public static companyValidation = "";

}