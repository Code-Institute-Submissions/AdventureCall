    // The questionNodes array provides the information for the question Nodes which appear on screen.
    // They can also add items when the picked answer function is called.

    const questionNodes = [
        {
            id: 1,
            question: "You awake in a moonlit meadow.  On the ground is a boulder, to the north is a witches coven",
            answers: [
                {
                    text: "Roll Boulder",
                    nextAnswer: 2,
                },
                {
                    text: "Go North",
                    nextAnswer: 3,
                },
            ],
            image: '<img src="assets/images/moonlit-meadow.jpg" alt="A Full moon shines over a dark meadow" width="265" height="200" />',
        },
        {
            id: 2,
            question: "You roll the boulder which reveals a secret entranceway to a catacomb.  In the catacomb is a sarcophagus and passageway to the east",
            answers: [
                {
                    text: "Open Sarcophagus",
                    nextAnswer: 4,
                },
                {
                    text: "Explore the eastern passageway",
                    nextAnswer: 5,
                },
            ],
            image: '',
        },
        {
            id: 3,
            question: "The witches attack you.  You are Dead.",
            answers: [
                {
                    text: "Start Again?",
                    nextAnswer: -1,
                },
            ],
            image: '<img src="assets/images/skull.png" alt="A skull" width="265" height="200" />',
        },
        {
            id: 4,
            question: "Inside the Sarcophagus is a skeleton and around its neck is a golden amulet!",
            answers: [
                {
                    text: "Take Amulet and travel along the eastern passageway",
                    nextAnswer: 5,
                },
                {
                    text: "Take Finger from skeleton and travel along the eastern passageway",
                    addItem: { skeletonFinger: true },
                    nextAnswer: 5,
                },
                {
                    text: "Ignore skeleton and travel along the eastern passageway",
                    nextAnswer: 5,
                },
            ],
            image: '',
        },
        {
            id: 5,
            question: "As you come out of the passageway the tunnel caves in behind you and now you stand before you is a locked Gate of Bones with Large cliffs to either side",
            answers: [
                {
                    text: "Use skeleton finger as a key on the locked gate",
                    itemRequired: (currentGameState) => currentGameState.skeletonFinger,
                    nextAnswer: 6,
                },
                {
                    text: "Try to scale the cliffs",
                    nextAnswer: 7,
                },
            ],
            image: '',
        },
        {
            id: 6,
            question: "The gate unlocks and a narrow pathway leads you to a Gigantic Castle Tower with and entrance.  Inside the entrance are stairs going up and stairs going down",
            answers: [
                {
                    text: "Go Down the Stairs",
                    nextAnswer: 8,
                },
                {
                    text: "Go Up the Stairs",
                    nextAnswer: 9,
                },
            ],
            image: '',
        },
        {
            id: 7,
            question: "You slip as you climb up the walls and fall to your death",
            answers: [
                {
                    text: "Restart?",
                    nextAnswer: -1,
                },
            ],
            image: '<img src="assets/images/skull.png" alt="A skull" width="265" height="200" />',          
        },
        {
            id: 8,
            question: "In the Dungeon you find a giant troll.  He cuts off your head",
            answers: [
                {
                    text: "Restart?",
                    nextAnswer: -1,
                },
            ],
            image: '<img src="assets/images/skull.png" alt="A skull" width="265" height="200" />',           
        },
        {
            id: 9,
            question: "In an upstairs room you find a troll asleep with a key around his neck and an open door",
            answers: [
                {
                    text: "Punch Troll",
                    nextAnswer: 10,
                },
                {
                    text: "Take key",
                    addItem: { trollKey: true },
                    nextAnswer: 11,
                },
                {
                    text: "Ignore troll and walk through open door",
                    nextAnswer: 11,
                },
            ],
            image: '',        
        },
        {
            id: 10,
            question: "The troll wakes up and eats you whole",
            answers: [
                {
                    text: "Restart?",
                    nextAnswer: -1,
                },
            ],
            image: '<img src="assets/images/skull.png" alt="A skull" width="265" height="200" />',          
        },
        {
            id: 11,
            question: "Before you is a chasm but behind you you hear the troll waking up",
            answers: [
                {
                    text: "Try to use key to lock door behind you?",
                    itemRequired: (currentGameState) => currentGameState.trollKey,
                    nextAnswer: 16,
                },
                {
                    text: "Jump the chasm",
                    nextAnswer: 12,
                },
            ],
            image: '',
        },
        {
            id: 12,
            question: "You make it to the other side, just about! Before you is a locked door and beside it a set of ladders",
            answers: [
                {
                    text: "Look on the ground",
                    nextAnswer: 15,
                },
                {
                    text: "Climb up the ladders",
                    nextAnswer: 17,
                },
                {
                    text: "Explore area",
                    nextAnswer: 15,
                },
                {
                    text: "Open Door",
                    itemRequired: (currentGameState) => currentGameState.trollKey,
                    nextAnswer: 14,
                },
            ],
            image: '',
        },
        {
            id: 14,
            question: "You walk into a treasure filled room and a wizard inside bestows upon you magical wizard powers which give you control over all the beasts in the castle. He says, You have a good heart and are a true warrior and disappears in a puff of smoke leaving the treasure and castle to you",
            answers: [
                {
                    text: "End Game",
                    nextAnswer: 19,
                },
            ],
            image: '',
        },
        {
            id: 15,
            question: "A giant spider attacks you.  You die",
            answers: [
                {
                    text: "Restart?",
                    nextAnswer: -1,
                },
            ],
            image: '<img src="assets/images/skull.png" alt="A skull" width="265" height="200" />',
        },
        {
            id: 16,
            question: "The troll is too quick for you and pops your head off like a beer bottle top.  You die",
            answers: [
                {
                    text: "Restart?",
                    nextAnswer: -1,
                },
            ],
            image: '<img src="assets/images/skull.png" alt="A skull" width="265" height="200" />',
        },
        {
            id: 17,
            question: "You alight on the roof of the tower and beside you is a roofer replacing roof tiles",
            answers: [
                {
                    text: "Climb back down?",
                    nextAnswer: 12,
                },
                {
                    text: "Offer to help the roofer",
                    nextAnswer: 18,
                },
            ],
            image: '',
        },
        {
            id: 18,
            question: "The roofer gladly accepts your help and hands you a bucket of nails.  It's very heavy and you overbalance.  A gust of wind whisks you off the roof and you fall to your death",
            answers: [
                {
                    text: "Restart?",
                    nextAnswer: -1,
                },
            ],
            image: '<img src="assets/images/skull.png" alt="A skull" width="265" height="200" />',
        },
    ];