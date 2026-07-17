const moneyInput = document.getElementById('money');
const hourlyRate = document.getElementById('hourlyRate');
const slotNum = document.getElementById('time-slots');
const resultArea = document.getElementById('divided-hours');
const resultHours = document.querySelector('.resultHours');
const calculateButton = document.getElementById('calculate');
const copyBtn = document.querySelector('.copy-btn');
const cleanBtn = document.querySelector('.clean-btn');

const HourSplitter = function () {
    const money = moneyInput.value; 
    const rate = hourlyRate.value; 
    const slots = slotNum.value;

  if (!money || !rate || !slots || rate <= 0 || slots <= 0) {
    alert('Please enter valid information');
    return;
  }
  const hourArr = [];
  let workedHours = +moneyInput.value / +hourlyRate.value;
  resultHours.textContent = `You Worked: ${workedHours} h`;
  let remaining = workedHours;
  let divider = +slotNum.value;
  while (hourArr.length < +slotNum.value - 1) {
    const random = Math.random() * 1 + 0.5;
    const slot = (remaining / divider) * random;
    remaining -= slot;
    divider--;
    hourArr.push(slot.toFixed(2));
  }
  hourArr.push(remaining.toFixed(2));
  resultArea.value = hourArr.join('\n');
};

const copyToClipboard = function () {
  if (!resultArea.value) return;
  navigator.clipboard.writeText(resultArea.value);
  copyBtn.textContent = 'Copied!';
  setTimeout(() => {
    copyBtn.textContent = 'Copy Reviews';
  }, 4000);

  moneyInput.value = '';
  hourlyRate.value = '';
  slotNum.value = '';
};

const cleanUI = function () {
  resultArea.value = '';
  moneyInput.value = '';
  hourlyRate.value = '';
  slotNum.value = '';
};

calculateButton.addEventListener('click', HourSplitter);
copyBtn.addEventListener('click', copyToClipboard);
cleanBtn.addEventListener('click', cleanUI);
