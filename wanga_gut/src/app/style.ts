import {StyleSheet} from 'react-native';
import {EdgeInsets, useSafeAreaInsets} from 'react-native-safe-area-context';

export const style = StyleSheet.create({
  flex1: {flex: 1},
  row: {flexDirection: 'row'},
  center: {justifyContent: 'center', alignItems: 'center'},
  centerx: {justifyContent: 'center'},
  centery: {alignItems: 'center'},
  bold: {fontWeight: 'bold'},
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
export function useInsetsToPadding(exclude: margins[]) {
  const insets = useSafeAreaInsets();
  return {
    paddingLeft: exclude.includes('left') ? null : insets.left,
    paddingRight: exclude.includes('right') ? null : insets.right,
    paddingBottom: exclude.includes('bottom') ? null : insets.bottom,
    paddingTop: exclude.includes('top') ? null : insets.top,
  };
}
