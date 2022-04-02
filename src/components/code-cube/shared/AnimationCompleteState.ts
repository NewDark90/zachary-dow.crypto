
import { KeyframeNames } from '../../../env';

export type CodeCubeAnimationCompleteState = Partial<{[animationName in KeyframeNames]: boolean}>;
