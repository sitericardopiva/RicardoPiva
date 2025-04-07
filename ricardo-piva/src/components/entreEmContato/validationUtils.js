export function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

export function formatPhoneNumber(phone) {
    if (typeof phone !== "string") return "";
    return phone.replace(/\D/g, "").replace(/(\d{2})(\d{4,5})(\d{4})/, "($1) $2-$3");
}

export function validatePhoneNumber(phone) {
    if (typeof phone !== "string") return false;
    const phoneRegex = /^\(\d{2}\) (\d{4}|\d{5})-\d{4}$/;
    if (phone.replace(/\D/g, "").length >= 10 && phone.replace(/\D/g, "").length <= 11) {
        return true; // Error message should disappear after 10 or 11 characters
    }
    return phoneRegex.test(phone);
}
