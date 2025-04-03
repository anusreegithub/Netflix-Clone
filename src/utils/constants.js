export const Apioptions = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYzc4MWQ3OTcyMTc0NjNiYWZmNzQzZWU5N2EyYWVhOCIsIm5iZiI6MTc0MzI3MTU0Mi45NzksInN1YiI6IjY3ZTgzNjc2NmIzNjdkNDY5NTY3Y2Q5MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3_51j5ox1wLY9yUlR-e8yOdRAYnsNvOKXrvVNmJ9BUA",
  },
};

export const IMG_CDN_URL ="https://image.tmdb.org/t/p/w500"


 const firebaseErrorMessages = {
  "auth/invalid-credential": "Invalid email or password. Please try again.",
  "auth/email-already-in-use": "This email is already registered. Try logging in instead.",
  "auth/user-not-found": "No account found with this email. Please sign up.",
  "auth/wrong-password": "Incorrect password. Please try again.",
  "auth/network-request-failed": "Network error. Check your internet connection.",
  "auth/weak-password": "Password should be at least 6 characters long.",
  "auth/too-many-requests": "Too many failed attempts. Try again later.",
};

export default firebaseErrorMessages