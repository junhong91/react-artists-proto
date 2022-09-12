class UserProfile {
  constructor(walletAddress, name, email, description = "") {
    this.walletAddress = walletAddress;
    this.name = name;
    this.email = email;
    this.description = description;
  }
}

export default UserProfile;
