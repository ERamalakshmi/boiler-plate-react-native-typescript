import { StyleSheet } from 'react-native'

const fontWeight = StyleSheet.create({
    weight_100: {
        fontWeight: '100',
    },
    weight_200: {
        fontWeight: '200',
    },
    weight_300: {
        fontWeight: '300',
    },
    weight_400: {
        fontWeight: '400',
    },
    weight_500: {
        fontWeight: '500',
    },
    weight_600: {
        fontWeight: '600',
    },
    weight_700: {
        fontWeight: '700',
    },
    weight_800: {
        fontWeight: '800',
    },
    weight_900: {
        fontWeight: '900',
    },
    weight_bold: {
        fontWeight: 'bold',
    },
    weight_normal: {
        fontWeight: 'normal',
    },
});

export const { weight_100, weight_200, weight_300, weight_400, weight_500, weight_600, weight_700, weight_800, weight_900, weight_bold, weight_normal } = fontWeight;


const fontSize = StyleSheet.create({
    size_12: {
        fontSize: 12,
    },
    size_14: {
        fontSize: 14,
    },
    size_16: {
        fontSize: 16,
    },
    size_18: {
        fontSize: 18,
    },
    size_20: {
        fontSize: 20,
    },
    size_22: {
        fontSize: 22,
    },
    size_24: {
        fontSize: 24,
    },
    size_26: {
        fontSize: 26,
    },
    size_28: {
        fontSize: 28,
    },
    size_30: {
        fontSize: 30,
    },
});

export const { size_12, size_14, size_16, size_18, size_20, size_22, size_24, size_26, size_28, size_30 } = fontSize

const alignments = StyleSheet.create({
    flex1: {
        flex: 1
    },
    flex25: {
        flex: 0.25
    },
    flex50: {
        flex: 0.50
    },
    flex75: {
        flex: 0.75
    },
    flexRow: {
        flexDirection: 'row'
    },
    flexRowReverse: {
        flexDirection: 'row-reverse'
    },
    flexColumn: {
        flexDirection: 'column'
    },
    flexColumnReverse: {
        flexDirection: 'column-reverse'
    },
    justifyCenter: {
        justifyContent: 'center'
    },
    justifyEnd: {
        justifyContent: 'flex-end'
    },
    justifyStart: {
        justifyContent: 'flex-start'
    },
    justifyAround: {
        justifyContent: 'space-around'
    },
    justifyBetween: {
        justifyContent: 'space-between'
    },
    justifyEvenly: {
        justifyContent: 'space-evenly'
    },
    alignItemBaseline: {
        alignItems: 'baseline'
    },
    alignItemCenter: {
        alignItems: 'center'
    },
    alignItemEnd: {
        alignItems: 'flex-end'
    },
    alignItemStart: {
        alignItems: 'flex-start'
    },
    alignItemStretch: {
        alignItems: 'stretch'
    },
    alignSelfAuto: {
        alignSelf: 'auto'
    },
    alignSelfBaseline: {
        alignSelf: 'baseline'
    },
    alignSelfCenter: {
        alignSelf: 'center'
    },
    alignSelfEnd: {
        alignSelf: 'flex-end'
    },
    alignSelfStart: {
        alignSelf: 'flex-start'
    },
    alignSelfStretch: {
        alignSelf: 'stretch'
    },
    textAlignAuto: {
        textAlign: 'auto'
    },
    textAlignCenter: {
        textAlign: 'center'
    },
    textAlignJustify: {
        textAlign: 'justify'
    },
    textAlignLeft: {
        textAlign: 'left'
    },
    textAlignRight: {
        textAlign: 'right'
    },
});

export const { alignItemBaseline, alignItemCenter, alignItemEnd, alignItemStart, alignItemStretch, alignSelfAuto, alignSelfBaseline, alignSelfCenter, alignSelfEnd, alignSelfStart, alignSelfStretch, flex1, flex25, flex50, flex75, flexColumn, flexColumnReverse, flexRow, flexRowReverse, justifyAround, justifyBetween, justifyCenter, justifyEnd, justifyEvenly, justifyStart, textAlignAuto, textAlignCenter, textAlignJustify, textAlignLeft, textAlignRight } = alignments

const styles = StyleSheet.create({
    p5: {
        padding: 5
    },
    p10: {
        padding: 10
    },
    p15: {
        padding: 15
    },
    pt5: {
        paddingTop: 5
    },
    pt10: {
        paddingTop: 10
    },
    pt15: {
        paddingTop: 15
    },
    pb5: {
        paddingBottom: 5
    },
    pb10: {
        paddingBottom: 10
    },
    pb15: {
        paddingBottom: 15
    },
    pl5: {
        paddingLeft: 5
    },
    pl10: {
        paddingLeft: 10
    },
    pl15: {
        paddingLeft: 15
    },
    pr5: {
        paddingRight: 5
    },
    pr10: {
        paddingRight: 10
    },
    pr15: {
        paddingRight: 15
    },
    ph5: {
        paddingHorizontal: 5
    },
    ph10: {
        paddingHorizontal: 10
    },
    ph15: {
        paddingHorizontal: 15
    },
    pv5: {
        paddingVertical: 5
    },
    pv10: {
        paddingVertical: 10
    },
    pv15: {
        paddingVertical: 15
    },
    m5: {
        margin: 5
    },
    m10: {
        margin: 10
    },
    m15: {
        margin: 15
    },
    mt5: {
        marginTop: 5
    },
    mt10: {
        marginTop: 10
    },
    mt15: {
        marginTop: 15
    },
    mb5: {
        marginBottom: 5
    },
    mb10: {
        marginBottom: 10
    },
    mb15: {
        marginBottom: 15
    },
    mr5: {
        marginRight: 5
    },
    mr10: {
        marginRight: 10
    },
    mr15: {
        marginRight: 15
    },
    ml5: {
        marginLeft: 5,
    },
    ml10: {
        marginLeft: 10,
    },
    ml15: {
        marginLeft: 15,
    },
    mh5: {
        marginHorizontal: 5
    },
    mh10: {
        marginHorizontal: 10
    },
    mh15: {
        marginHorizontal: 15
    },
    mv5: {
        marginVertical: 5
    },
    mv10: {
        marginVertical: 10
    },
    mv15: {
        marginVertical: 15
    },
});

export const { m10, m15, m5, mb10, mb15, mb5, mh10, mh15, mh5, ml10, ml15, ml5, mr10, mr15, mr5, mt10, mt15, mt5, mv10, mv15, mv5, p10, p15, p5, pb10, pb15, pb5, ph10, ph15, ph5, pl10, pl15, pl5, pr10, pr15, pr5, pt10, pt15, pt5, pv10, pv15, pv5 } = styles