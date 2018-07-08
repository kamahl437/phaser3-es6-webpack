import 'phaser';
import BootScene from './scenes/BootScene';
import GameScene from './scenes/GameScene';
import TitleScene from './scenes/TitleScene';
import _ from 'lodash';

//thee original config for the mario game:
// const config = {
//     // For more settings see <https://github.com/photonstorm/phaser/blob/master/src/boot/Config.js>
//     type: Phaser.WEBGL,
//     pixelArt: true,
//     roundPixels: true,
//     parent: 'content',
//     width: 400,
//     height: 240,
//     physics: {
//         default: 'arcade',
//         arcade: {
//             gravity: { y: 800 },
//             debug: false
//         }
//     },
//     scene: [
//         BootScene,
//         TitleScene,
//         GameScene
//     ]
// };
// console.log('I am in the file man');
// let exArr = [1,2,3,4,5,6,7,8,9];
// _.each(exArr, (e) => {
//     console.log(e);
// })

const game = new Phaser.Game(config);