const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name? ', (answer) => {
  const myName = answer;

  rl.question("What's an activity you like doing?", (answer) => {
    const activity = answer;

    rl.question("What do you listen to while doing that?", (answer) => {
      const music = answer

      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.)", (answer) => {
        const mealtime = answer;

        rl.question("What's your favourite thing to eat for that meal?", (answer) => {
          const favfood = answer;

          rl.question("Which sport is your absolute favourite?", (answer) => {
            const sport = answer;

            rl.question("What is your superpower? In a few words, tell us what you are amazing at!", (answer) => {
              const superpower = answer;
    
              const profile = `Hey guys, ${myName} here! I will be telling you a little about me. First of all, I love me some ${activity}. I will often throw on ${music} in the background while doing so too. When the time arrives, I'll tuck into the best meal of the day, ${mealtime}! You can't go wrong with some ${favfood}. In terms of sports, my favorite is ${sport}. Lastly, I have a seriously good affinity for ${superpower}!`

              console.log(profile)
            rl.close();
            });
          });
        });
      });

    });
    
  });

});





