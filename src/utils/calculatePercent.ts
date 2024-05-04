const calculatePercent = (behaviour: number, communication: number, situation: number) => {
    const totalScore = behaviour + communication + situation;
    const maxScore = 30; // 10 points for each of the three areas
    const percentage = (totalScore / maxScore) * 100;

    return Math.floor(percentage);
  }

  export default calculatePercent