import axios from 'axios';
const donationLumpsum = document.getElementById('donation-lumpsum');

axios.get('https://donor-manage-bw.herokuapp.com/api/donations/total').then((response) => {donationLumpsum.textContent = response.data.total})
