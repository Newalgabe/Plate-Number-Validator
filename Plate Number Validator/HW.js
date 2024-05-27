const regions = {
  '01': 'Abşeron',
  '26': 'Xankəndi',
  '50': 'Sumqayıt',
  '02': 'Ağdam',
  '27': 'Xaçmaz',
  '51': 'Samux',
  '03': 'Ağdaş',
  '28': 'Xocavənd',
  '52': 'Salyan',
  '04': 'Ağcabədi',
  '29': 'Xızı',
  '53': 'Siyəzən',
  '05': 'Ağstafa',
  '30': 'İmişli',
  '54': 'Sabirabad',
  '06': 'Ağsu',
  '31': 'İsmayıllı',
  '55': 'Şəki',
  '07': 'Astara',
  '32': 'Kəlbəcər',
  '56': 'Şamaxı',
  '08': 'Balakən',
  '33': 'Kürdəmir',
  '57': 'Şəmkir',
  '09': 'Bərdə',
  '34': 'Qax',
  '58': 'Şuşa',
  '10': 'Bakı',
  '77': 'Bakı',
  '90': 'Bakı',
  '35': 'Qazax',
  '59': 'Tərtər',
  '11': 'Beyləqan',
  '36': 'Qəbələ',
  '60': 'Tovuz',
  '12': 'Biləsuvar',
  '37': 'Qobustan',
  '61': 'Ucar',
  '14': 'Cəbrayıl',
  '38': 'Qusar',
  '62': 'Zaqatala',
  '15': 'Cəlilabad',
  '39': 'Qubadlı',
  '63': 'Zərdab',
  '16': 'Daşkəsən',
  '40': 'Quba',
  '64': 'Zəngilan',
  '17': 'Dəvəçi',
  '41': 'Laçın',
  '65': 'Yardımlı',
  '18': 'Şirvan',
  '42': 'Lənkəran',
  '66': 'Yevlax',
  '19': 'Füzuli',
  '43': 'Lerik',
  '67': 'Babək',
  '20': 'Gəncə',
  '44': 'Masallı',
  '68': 'Şərur',
  '21': 'Gədəbəy',
  '45': 'Mingəçevir',
  '69': 'Ordubad',
  '22': 'Goranboy',
  '46': 'Naftalan',
  '70': 'Naxçıvan şəhəri',
  '23': 'Göyçay',
  '47': 'Neftçala',
  '71': 'Şahbuz',
  '24': 'Hacıqabul',
  '48': 'Oğuz',
  '72': 'Culfa',
  '25': 'Xanlar',
  '49': 'Saatlı',
  '85': 'Naxçıvan',
  '99': 'Tranzit'
};

function isFirstLetterCapitalized(str) {
  return str.charAt(0) === str.charAt(0).toUpperCase();
}

document.addEventListener('DOMContentLoaded', () => {
  const plateNumberInput = document.getElementById('plateNumber');
  const regionDisplay = document.getElementById('regionDisplay');
  const capitalizationDisplay = document.getElementById('capitalizationDisplay');

  plateNumberInput.addEventListener('input', () => {
    const plateNumber = plateNumberInput.value.trim();
    const plateParts = plateNumber.split('-');

    if (plateParts.length !== 3) {
      regionDisplay.textContent = 'Invalid format';
      capitalizationDisplay.textContent = '';
      return;
    }

    const regionCode = plateParts[0];
    const region = regions[regionCode];
    regionDisplay.textContent = region ? `Region: ${region}` : 'Unknown region';

    const firstLetter = plateParts[1].charAt(0);
    const isFirstLetterCap = isFirstLetterCapitalized(firstLetter);
    capitalizationDisplay.textContent = `First letter is ${isFirstLetterCap ? '' : 'not '}capitalized`;
  });

  const plateNumberForm = document.getElementById('plateNumberForm');
  plateNumberForm.addEventListener('submit', (e) => {
    e.preventDefault(); 
    const plateNumber = plateNumberInput.value.trim();
    const isValidPlate = plateNumber.match(/[0-9]{2}-[A-Za-z]{2}-[0-9]{3}/);

    if (isValidPlate) {
      document.getElementById('validationResult').innerText = 'Plate number is valid';
    } else {
      plateNumberInput.classList.add('shake');
      setTimeout(() => {
        plateNumberInput.classList.remove('shake');
      }, 400);
      document.getElementById('validationResult').innerText = 'Invalid plate number';
    }
  });
});

function clearPlate() {
  document.getElementById('plateNumber').value = ''; 
  document.getElementById('validationResult').innerText = ''; 
}

document.getElementById('plateNumberForm').addEventListener('submit', function(event) {
  event.preventDefault(); 
  const plateNumber = document.getElementById('plateNumber').value.trim();
  const plateParts = plateNumber.split('-');
  const regionCode = plateParts[0];
  const region = regions[regionCode];
  const firstLetter = plateParts[1].charAt(0);
  const isFirstLetterCap = firstLetter === firstLetter.toUpperCase();
  
  document.getElementById('regionDisplay').textContent = region ? `Region: ${region}` : 'Unknown region';
  document.getElementById('capitalizationDisplay').textContent = `First letter is ${isFirstLetterCap ? '' : 'not '}capitalized`;
  document.getElementById('formSubmission').textContent = `Plate number ${plateNumber} is valid.`;
});

function clearPlate() {
  document.getElementById('plateNumber').value = ''; 
  document.getElementById('validationResult').innerText = ''; 
  document.getElementById('regionDisplay').innerText = '';
  document.getElementById('capitalizationDisplay').innerText = ''; 
  document.getElementById('formSubmission').innerText = ''; 
}