export default function HorizontalList({props}) {
    return (
        <ScrollView style={{ paddingLeft: TPadding.md }} horizontal showsHorizontalScrollIndicator={false}>
            {props}
        </ScrollView>
    )
}