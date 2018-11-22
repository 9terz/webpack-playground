import moment from 'moment';
import { secretButton } from './getdom';
import '../css/main.css';
let oldText = secretButton.text();
secretButton.text(`${oldText} Now is ${moment().toDate()}`);
