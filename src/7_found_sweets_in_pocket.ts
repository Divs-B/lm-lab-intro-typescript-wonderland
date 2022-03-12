import { endAdventure, haveAdventures } from "..";
import { askQuestion, clear, print } from '../console';
import { userName, user } from './1_rabbit_hole';

export function found_sweets() {
    clear(true);
    print('------------------------');
    print(`✅ CONGRATULATIONS ${user}! You have successfully guessed it!`)
    print('It was marshmallow..')
    print('Mesmerising truth will continue to unfold.. stay tuned🥳')
    print('------------------------');
    return askQuestion(
        'Press ENTER to re-enter Wonderland! ',
        haveAdventures
    );
}

