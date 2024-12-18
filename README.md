# Crowdfunding Platform for Multiple Creators

A crowdfunding platform where creators can receive donations from supporters. Each creator can showcase their profile, accept payments via Razorpay, and display a leaderboard of top supporters. The platform includes AI-generated payment message suggestions to enhance user engagement.

---

## Features

### For Supporters
- **Browse Creator Profiles**: View the creator's name, profile picture, and cover image.
- **Make Donations**: Seamlessly donate to creators using Razorpay.
- **Message the Creator**: Leave a custom message for the creator while making a donation.
- **AI-Generated Messages**: Get personalized suggestions for donation messages powered by Google Generative AI or OpenAI.
- **Leaderboard**: See the top 10 supporters of a creator, along with their donation amounts and messages.

### For Creators
- **Personalized Profiles**: Update your profile with a name, profile picture, and cover photo.
- **Payment Management**: Securely manage Razorpay credentials to accept payments.
- **Donation History**: View all donation records, including supporter details, messages, and timestamps.

---

## Technology Stack

### Frontend
- **Framework**: Next.js (React-based)
- **Styling**: TailwindCSS
- **UI Components**: React-Toastify for notifications

### Backend
- **Server**: Next.js (server actions for API routes)
- **Database**: MongoDB with Mongoose for ORM
- **Authentication**: NextAuth.js

### Integration
- **Payments**: Razorpay API
- **AI Message Suggestions**: Google Generative AI or OpenAI APIs

---

## Installation

### Prerequisites
- Node.js (>=16.x)
- MongoDB (local or hosted on services like MongoDB Atlas)
- Razorpay account with API credentials
- GitHub account for authentication (optional, for OAuth)

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/crowdfunding-platform.git
   cd crowdfunding-platform
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add the following environment variables:

   ```env
   MONGO_URI=<your-mongodb-connection-string>
   NEXTAUTH_SECRET=<your-nextauth-secret>
   NEXTAUTH_URL=<your-application-url>

   # Razorpay Credentials
   RAZORPAY_KEY_ID=<your-razorpay-key-id>
   RAZORPAY_KEY_SECRET=<your-razorpay-key-secret>

   # GitHub OAuth
   GITHUB_ID=<your-github-client-id>
   GITHUB_SECRET=<your-github-client-secret>

   # Google API Key
   GOOGLE_API_KEY=<your-google-api-key>
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open the application in your browser:
   ```
   http://localhost:3000
   ```

---

## Key Features Explained

### Razorpay Integration
- Payment gateway integration allows supporters to donate securely using multiple payment methods.
- Razorpay API credentials (Key ID and Key Secret) are stored securely in environment variables.

### AI-Generated Messages
- Enhance user interaction by suggesting payment messages using AI.
- Powered by Google Generative AI or OpenAI APIs.
- Example prompts include:
  - "Thank you for inspiring me!"
  - "Keep up the amazing work!"

### Authentication with NextAuth.js
- Supports OAuth authentication via GitHub.
- Ensures secure user login and session handling.

### Leaderboard
- Displays the top 10 supporters for each creator.
- Sorted by donation amount, with donor messages displayed.

---

## Environment Variables

Here’s a complete list of environment variables required for the project:

| Variable              | Description                                      |
|-----------------------|--------------------------------------------------|
| `MONGO_URI`           | MongoDB connection string                       |
| `NEXTAUTH_SECRET`     | Secret key for NextAuth.js sessions             |
| `NEXTAUTH_URL`        | Base URL of the application                     |
| `RAZORPAY_KEY_ID`     | Razorpay API Key ID                             |
| `RAZORPAY_KEY_SECRET` | Razorpay API Key Secret                         |
| `GITHUB_ID`           | GitHub OAuth Client ID                          |
| `GITHUB_SECRET`       | GitHub OAuth Client Secret                      |
| `GOOGLE_API_KEY`      | Google API Key for AI-generated messages        |

---

## How to Contribute

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m "Add feature-name"
   ```
4. Push to your fork:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request in the main repository.

---

## Known Issues
- None reported at the moment. Please raise an issue if you encounter any bugs.

---

## License
This project is licensed under the MIT License. See the `LICENSE` file for details.

---

## Acknowledgments
- Thanks CodeWithHarry (https://github.com/CodeWithHarry) 
- Razorpay for payment integration
- OpenAI/Google Generative AI for message suggestions
- NextAuth.js for authentication

