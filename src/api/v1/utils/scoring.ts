function getLetterGrade(score: number) {
  if (score >= 85) {
    return "A";
  }
  if (score >= 80) {
    return "A-";
  }
  if (score >= 75) {
    return "B+";
  }
  if (score >= 70) {
    return "B";
  }
  if (score >= 65) {
    return "B-";
  }
  if (score >= 60) {
    return "C+";
  }
  if (score >= 55) {
    return "C";
  }
  if (score >= 50) {
    return "C-";
  }
  if (score >= 45) {
    return "D+";
  }
  if (score >= 40) {
    return "D";
  }

  if (score >= 20) {
    return "E";
  }
  return "F";
}

export { getLetterGrade };
