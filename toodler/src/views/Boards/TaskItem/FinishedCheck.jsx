function FinishedCheck(props) {
  const { isFin } = props;
  if (isFin) {
    return 'YES';
  }

  return 'NO!';
}

export default FinishedCheck;
