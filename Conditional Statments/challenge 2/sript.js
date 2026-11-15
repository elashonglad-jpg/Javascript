//challenge 2
//step 1
let goal = 5000;
let month = 1;
let saving = 100;
let totals = 0;

// Step 2: Keep saving while total is less than the goal
while(totals < goal)

//step 3
{
    totals += saving;
//step 4
 
  if (saving >= 500) {
    console.log('month ${month}; saved ${saving}; total KSH ${totals}')
  } else {
    console.log(`Month ${month}: saved KES ${saving}, total KES ${totals}`);
  }
    //step 5
    month++;
    saving += 50;
}

console.log(`Goal reached in month ${month - 1} with KES ${totals}`);