function rollD6() {
    return Math.ceil(Math.random() * 6);
}

function rollD8() {
    return Math.ceil(Math.random() * 8);
}

function sumAfterRemovingLowest(rolls) {
    const minRoll = Math.min(...rolls);
    const indexToRemove = rolls.indexOf(minRoll);
    rolls.splice(indexToRemove, 1);
    return rolls.reduce((a, b) => a + b, 0);
}

function rollStat(legendary = false) {
    if (legendary) {
        const rolls = Array(4).fill().map(rollD6);
        const sumOfRolls = sumAfterRemovingLowest(rolls);
        return sumOfRolls < 18 ? sumOfRolls + 1 : sumOfRolls;
    }
    const firstDie = rollD6();
    const secondDie = rollD6();
    const thirdDie = rollD6();
    const totalStat = firstDie + secondDie + thirdDie;
    return {
        firstDie,
        secondDie,
        thirdDie,
        totalStat
    };
}

function getColorForRoll(roll) {
    if (roll === 6) {
      return '#00a86b'; 
    } else if (roll === 1) {
      return '#ff5722';
    } else {
      return '#FFFFFF';
    }
  };
  

function getColorForStat(totalStat) {
    if (totalStat >= 16) {
      return '#00a86b'; 
    } else if (totalStat <= 5) {
      return '#ff5722';
    } else {
      return '#FFFFFF';
    }
  };
  
function save(saveObject) {
    // Save state to localStorage
    console.log(saveObject);
    localStorage.setItem('save', JSON.stringify(saveObject));
};

function load() {
    try {
      const savedData = JSON.parse(localStorage.getItem('save'));
      
      if (savedData) {
        return savedData;
      } else {
        console.error('No saved data found.');
        return null;
      }
    } catch (error) {
      console.error('Error loading saved data:', error);
      return null;
    }
  }
  

module.exports = {
    rollStat,
    rollD8,
    getColorForStat,
    getColorForRoll,
    save,
    load,
};