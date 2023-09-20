import {StyleSheet} from 'react-native';
import {EdgeInsets} from 'react-native-safe-area-context';

export const style = StyleSheet.create({
  row: {flexDirection: 'row'},
  center: {justifyContent: 'center', alignItems: 'center'},
  m3: {margin: 3},
  m5: {margin: 5},
  m7: {margin: 7},
  p3: {padding: 3},
  p5: {padding: 5},
  p7: {padding: 7},
  faded: {opacity: 0.5},
  transparent: {backgroundColor: 'transparent'},
});

type margins = 'top' | 'bottom' | 'right' | 'left';
export function insetsToMargins(insets: EdgeInsets, exclude: margins[]) {
  return {
    marginLeft: exclude.includes('left') ? null : insets.left,
    marginRight: exclude.includes('right') ? null : insets.right,
    marginBottom: exclude.includes('bottom') ? null : insets.bottom,
    marginTop: exclude.includes('top') ? null : insets.top,
  };
}
