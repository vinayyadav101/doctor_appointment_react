export default function AdminCard({additionalCss , TotalNum , Type , }){
    return(
        <Card
                  variant="outlined"
                  orientation="horizontal"
                  sx={{
                    alignItems: "center",
                    maxWidth: additionalCss.card.parent.maxWidth,
                    minWidth: additionalCss.card.parent.minWidth,
                    minHeight: additionalCss.card.parent.minHeight,
                    textAlign: "center",
                  }}
                >
                  <Box sx={{ width: additionalCss.card.box.size }}>
                    <BsCalendar2MonthFill
                      className="bg-transparent"
                      size={additionalCss.card.box.size}
                    />
                  </Box>
                  <CardContent>
                    <Typography
                      variant="p"
                      sx={{ fontSize: additionalCss.card.content.NumSize }}
                    >
                      100000
                    </Typography>
                    <Typography
                      variant="p"
                      sx={{ fontSize: additionalCss.card.content.TextSize }}
                    >
                      Total Doctors
                    </Typography>
                  </CardContent>
                </Card>
    )
}