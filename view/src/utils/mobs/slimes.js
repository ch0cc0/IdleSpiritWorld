import slimeDarkBlueSprite from '../../assets/slimes/slimeDarkBlueVariant2.png'
import slimeLimeV2Sprite from '../../assets/slimes/slimeLimeVariant2.png'
import slimePurpleWithBoneSprite from '../../assets/slimes/slimePurpleWithBone.png'
import slimePurpleV2Sprite from '../../assets/slimes/slimePurpleVariant2.png'
import slimeBlueGreyWithBoneSprite from '../../assets/slimes/slimeBlueGreyWithBone.png'

import Mob from './model';


const slime = new Mob('Slime', [slimeLimeV2Sprite, slimeDarkBlueSprite, slimePurpleWithBoneSprite, slimePurpleV2Sprite, slimeBlueGreyWithBoneSprite], 1, 10);


export default slime;