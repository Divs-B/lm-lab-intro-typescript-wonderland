import { endAdventure, haveAdventures } from '..';
import { askQuestion, clear, print } from '../console';
import { found_sweets } from './7_found_sweets_in_pocket'

// This is a very unusual type setup. It's pobably not a great idea in the real world to nest so many properties
// with the exact same name. But in Wonderland, this sort of thing is normal, so we've just got to find a way through it...
interface WakeUp {
	wake?: WakeUpFromDream;
}
interface WakeUpFromDream {
	wake?: WakeUpFromREMSleep;
}

interface WakeUpFromREMSleep {
	wake?: WakeUpFromDeepSleep;
}
interface WakeUpFromDeepSleep {
	canWake?: string;
}

const sweets = ['fudge', 'marshmallow', 'oreo_biscuits'] as const;

export function wakeUp(): void {
	clear(true);
	print('Wait... was this all a dream?');

	const awoken = tryToWakeUp();

	// optional parameters can be accessed safely with the ?. operator
	// this will only return if every parameter in the whole chain is properly set...
	if (awoken.wake?.wake?.wake?.canWake === 'Yes') {
		print('You have awoken in your bed 🛏 What a lovely dream.');
		print('Although...❓❓❓');
		print('What are these tarts doing here?! 🥧🥧🥧🥧🥧🥧 🤔');

		print(
			'✅ CONGRATULATIONS! You successfully made it through Wonderland! 🥳' +
			'Do you want to see what happend next? ')
		print('After Alice got awake she found sweets inside her pajamas pocket!!')
		print('Guess the sweet she found?')
		print('it was the same sweets she had during tea party! was it really dream or anything else?')

		sweets.forEach((sweet, i) => print(`   ${i} - ${sweet}`));

		return askQuestion(
			'Press ENTER to see what happend next! ',
			enterSweetName
		);
	} else {
		print('You are unable to wake up! 😱');
		return endAdventure();
	}
}

function tryToWakeUp(): WakeUp {
	// 👉 FIXME ❌
	return {
		wake: {
			wake: {
				wake: {
					canWake: 'Yes',
				},
			},
		},
	};
}

function enterSweetName(sweet: string) {
	const number = parseInt(sweet);
	if (sweets[number] === 'marshmallow')
		return found_sweets();
}
