import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  faq= [
    {title:'What is Romp, and what type of gaming app is it?', desc:'Romp is an online gaming app that offers a diverse collection of multiplayer games designed to entertain users of all ages. It provides a platform for players to connect and compete against each other in various virtual worlds.'},
    {title:'How can I download Romp on my device?', desc:"To download Romp, visit the respective app store for your device (e.g., Apple App Store or Google Play Store) and search for 'Romp' Click on the app's icon and press the download/install button to begin the installation process."},
    {title:'Is Romp free to use, or does it require a subscription?', desc:'Romp offers both a free version and a premium subscription. The free version allows access to a limited selection of games, while the premium subscription unlocks the full range of games and exclusive features.'},
    {title:'Can I play Romp games offline?', desc:'No, Romp is an online gaming app, and a stable internet connection is required to play its multiplayer games and engage with other players.'},
    {title:' Are there any age restrictions for using Romp?', desc:'Romp is designed to be family-friendly, and users of all ages can enjoy its games. However, some games may have specific age restrictions or parental controls to ensure appropriate content for younger players.'},
    {title:'How do I invite friends to play with me on Romp?', desc:'To play with your friends on Romp, you can send them an invite link through various messaging apps or social media platforms. They will need to download Romp and sign up to join your gaming sessions.'},
    {title:'Can I customize my avatar on Romp?', desc:'Yes, Romp allows you to personalize your avatar with a variety of customization options. You can choose from various outfits, hairstyles, accessories, and more to create a unique representation of yourself in the virtual world.'},
    {title:' How secure is Romp in terms of data and privacy?', desc:"Romp takes data privacy seriously and employs industry-standard security measures to safeguard user information. Personal data is collected and processed in accordance with the app's privacy policy, which can be accessed within the app or on their official website."},
    {title:'What should I do if I encounter inappropriate behavior from other players?', desc:'Romp has a robust reporting and moderation system in place to address inappropriate behavior and ensure a safe gaming environment. If you encounter any issues, you can report the player or incident within the app, and the Romp support team will investigate and take appropriate action.'},
    {title:'Can I suggest new game ideas or provide feedback to Romp developers?', desc:"Absolutely! Romp values user feedback and encourages players to suggest new game ideas or provide feedback on existing features. You can share your thoughts through the app's feedback or contact options, usually found in the settings or support section. Your input helps improve the app and enhances the overall gaming experience for everyone." },
    

   
  ]
  

}
