var boardData = {
	DTT: {
		highestParticipationTeamLabel: "traindepot",
		highestCompletionTeamLabel: "optimizers",
		teams: [
			{
				label: "smartglass", //The Team's name for data purposes
				name: "Smart Glass", //The Team name to be displayed
				avatar: "assets/imgs/Smart-Glass.png", //The URL of the avatar image
				progress: 48, //Progress (%)
				coinsLearning: 25, //Coins from E.P.P.O.T. Learning
				coinsInspires: 0, //Coins from E.P.P.O.T. Inspires
				coinsSharing: 150, //Coins from E.P.P.O.T. Sharing
				coinsMisc: 315, //Misc coins
				liner: "How might we utilise a wearable smart glass solution so as to allow for safer and more convenient remote on-site supervision?" //The Team liner
			},
			{
				label: "automateit", //The Team's name for data purposes
				name: "Automate-it", //The Team name to be displayed
				avatar: "assets/imgs/Automate-It.png", //The URL of the avatar image
				progress: 55, //Progress (%)
				coinsLearning: 25, //Coins from E.P.P.O.T. Learning
				coinsInspires: 0, //Coins from E.P.P.O.T. Inspires
				coinsSharing: 150, //Coins from E.P.P.O.T. Sharing
				coinsMisc: 345, //Misc coins
				liner: "How might we streamline site activity tracking by automating the manual processes so as to minimise the time spent on updating?" //The Team liner
			},
			{
				label: "rsde", //The Team's name for data purposes
				name: "RSDE Mobile application", //The Team name to be displayed
				avatar: "assets/imgs/ATeam-RSDE.png", //The URL of the avatar image
				progress: 27, //Progress (%)
				coinsLearning: 25, //Coins from E.P.P.O.T. Learning
				coinsInspires: 0, //Coins from E.P.P.O.T. Inspires
				coinsSharing: 150, //Coins from E.P.P.O.T. Sharing
				coinsMisc: 120, //Misc coins
				liner: "How might we develop a mobile application to provide a platform for staff to quickly access information and engineering details?" //The Team liner
			},
			{
				label: "transformer", //The Team's name for data purposes
				name: "Transformer", //The Team name to be displayed
				avatar: "assets/imgs/Transformer.png", //The URL of the avatar image
				progress: 38, //Progress (%)
				coinsLearning: 23, //Coins from E.P.P.O.T. Learning
				coinsInspires: 2, //Coins from E.P.P.O.T. Inspires
				coinsSharing: 150, //Coins from E.P.P.O.T. Sharing
				coinsMisc: 355, //Misc coins
				liner: "How might we develop retractable covered linkways so as to eliminate the need to have high covered linkways and optimise sheltering against rain?" //The Team liner
			},
			{
				label: "dontberidiculous", //The Team's name for data purposes
				name: "Don't be ridiculous", //The Team name to be displayed
				avatar: "assets/imgs/Dont-Be-Ridiculous.png", //The URL of the avatar image
				progress: 54, //Progress (%)
				coinsLearning: 3, //Coins from E.P.P.O.T. Learning
				coinsInspires: 25, //Coins from E.P.P.O.T. Inspires
				coinsSharing: 150, //Coins from E.P.P.O.T. Sharing
				coinsMisc: 335, //Misc coins
				liner: "How might we reduce unnecessary car trips through an awareness campaign so as to control carbon emissions?" //The Team liner
			},
			{
				label: "avis", //The Team's name for data purposes
				name: "AVIS", //The Team name to be displayed
				avatar: "assets/imgs/Avis.png", //The URL of the avatar image
				progress: 53, //Progress (%)
				coinsLearning: 25, //Coins from E.P.P.O.T. Learning
				coinsInspires: 0, //Coins from E.P.P.O.T. Inspires
				coinsSharing: 0, //Coins from E.P.P.O.T. Sharing
				coinsMisc: 223, //Misc coins
				liner: "How might we perform visual inspections on trains automatically so as to reduce time and effort taken?" //The Team liner
			},
			{
				label: "traindepot", //The Team's name for data purposes
				name: "Train/Depot Enhancement", //The Team name to be displayed
				avatar: "assets/imgs/Train-Depot.png", //The URL of the avatar image
				progress: 45, //Progress (%)
				coinsLearning: 68, //Coins from E.P.P.O.T. Learning
				coinsInspires: 0, //Coins from E.P.P.O.T. Inspires
				coinsSharing: 300, //Coins from E.P.P.O.T. Sharing
				coinsMisc: 335, //Misc coins
				liner: "How might we install temperature and humidity sensors at depots to increase convenience and safety of staff?" //The Team liner
			},
			{
				label: "ateam", //The Team's name for data purposes
				name: "A-team", //The Team name to be displayed
				avatar: "assets/imgs/ATeam.png", //The URL of the avatar image
				progress: 50, //Progress (%)
				coinsLearning: 50, //Coins from E.P.P.O.T. Learning
				coinsInspires: 0, //Coins from E.P.P.O.T. Inspires
				coinsSharing: 150, //Coins from E.P.P.O.T. Sharing
				coinsMisc: 354, //Misc coins
				liner: "How might we create an automated door access system to log visitor temperature efficiently?" //The Team liner
			},
			{
				label: "handguardians", //The Team's name for data purposes
				name: "Hand Guardians", //The Team name to be displayed
				avatar: "assets/imgs/Hand-Guardians.png", //The URL of the avatar image
				progress: 66, //Progress (%)
				coinsLearning: 25, //Coins from E.P.P.O.T. Learning
				coinsInspires: 3, //Coins from E.P.P.O.T. Inspires
				coinsSharing: 150, //Coins from E.P.P.O.T. Sharing
				coinsMisc: 270, //Misc coins
				liner: "How might we develop a simple product that can be fitted to Elevated Work Platforms so as to reduce the risk of hand injuries?" //The Team liner
			},
			{
				label: "parkemon", //The Team's name for data purposes
				name: "Par-Ke-Mon", //The Team name to be displayed
				avatar: "assets/imgs/Par-Ke-Mon.png", //The URL of the avatar image
				progress: 43, //Progress (%)
				coinsLearning: 23, //Coins from E.P.P.O.T. Learning
				coinsInspires: 18, //Coins from E.P.P.O.T. Inspires
				coinsSharing: 150, //Coins from E.P.P.O.T. Sharing
				coinsMisc: 341, //Misc coins
				liner: "How might we develop rapid, mobile and cost-effective enforcement solutions as alternative options to meet increasing request for permanent CCTV enforcement cameras?" //The Team liner
			},
			{
				label: "optimizers", //The Team's name for data purposes
				name: "Optimizers", //The Team name to be displayed
				avatar: "assets/imgs/Optimizers.png", //The URL of the avatar image
				progress: 74, //Progress (%)
				coinsLearning: 6, //Coins from E.P.P.O.T. Learning
				coinsInspires: 0, //Coins from E.P.P.O.T. Inspires
				coinsSharing: 150, //Coins from E.P.P.O.T. Sharing
				coinsMisc: 361, //Misc coins
				liner: "How might we develop and maintain a cost-effective CCTV system for operations by streamlining the procurement approach and maintenance regime." //The Team liner
			}
		]
	},
	OLTA: {
		highestParticipationTeamLabel: "customers",
		highestCompletionTeamLabel: "whacamole",
		teams: [
			{
				label: "customers", //The Team's name for data purposes
				name: "Customers", //The Team name to be displayed
				avatar: "assets/imgs/Par-Ke-Mon.png", //The URL of the avatar image
				progress: 0, //Progress (%)
				coinsLearning: 0, //Coins from E.P.P.O.T. Learning
				coinsInspires: 0, //Coins from E.P.P.O.T. Inspires
				coinsSharing: 0, //Coins from E.P.P.O.T. Sharing
				coinsMisc: 0, //Misc coins
				liner: "How might we better serve our customers whilst ensuring productive use of resources?" //The Team liner
			},
			{
				label: "whacamole", //The Team's name for data purposes
				name: "Whac-a-mole", //The Team name to be displayed
				avatar: "assets/imgs/Transformer.png", //The URL of the avatar image
				progress: 0, //Progress (%)
				coinsLearning: 0, //Coins from E.P.P.O.T. Learning
				coinsInspires: 0, //Coins from E.P.P.O.T. Inspires
				coinsSharing: 0, //Coins from E.P.P.O.T. Sharing
				coinsMisc: 0, //Misc coins
				liner: "How might we streamline our processes related to commuter facilities and road infrastructure, and leverage on commonalities to improve work efficiency and productivity?" //The Team liner
			},
			{
				label: "thinkingcaps", //The Team's name for data purposes
				name: "Thinking Caps", //The Team name to be displayed
				avatar: "assets/imgs/Train-Depot.png", //The URL of the avatar image
				progress: 0, //Progress (%)
				coinsLearning: 0, //Coins from E.P.P.O.T. Learning
				coinsInspires: 0, //Coins from E.P.P.O.T. Inspires
				coinsSharing: 0, //Coins from E.P.P.O.T. Sharing
				coinsMisc: 0, //Misc coins
				liner: "How might we improve information sharing and exchange of ideas to improve work efficiency" //The Team liner
			},
			{
				label: "groupnotfound", //The Team's name for data purposes
				name: "404! Group Not Found", //The Team name to be displayed
				avatar: "assets/imgs/ATeam-RSDE.png", //The URL of the avatar image
				progress: 0, //Progress (%)
				coinsLearning: 0, //Coins from E.P.P.O.T. Learning
				coinsInspires: 0, //Coins from E.P.P.O.T. Inspires
				coinsSharing: 0, //Coins from E.P.P.O.T. Sharing
				coinsMisc: 0, //Misc coins
				liner: "How might we empower our workforce to be productive, mobile and connected?" //The Team liner
			},
			{
				label: "empathy", //The Team's name for data purposes
				name: "Empathy", //The Team name to be displayed
				avatar: "assets/imgs/Dont-Be-Ridiculous.png", //The URL of the avatar image
				progress: 0, //Progress (%)
				coinsLearning: 0, //Coins from E.P.P.O.T. Learning
				coinsInspires: 0, //Coins from E.P.P.O.T. Inspires
				coinsSharing: 0, //Coins from E.P.P.O.T. Sharing
				coinsMisc: 0, //Misc coins
				liner: "How might we balance the needs of stakeholders and commuters while achieving our Walk Cycle Ride SG Vision?" //The Team liner
			}
		]
	}
};
