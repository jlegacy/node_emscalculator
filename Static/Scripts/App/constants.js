app.value('webReserveRegexPatterns', {
    partialAccountNumberPattern: /^[a-zA-Z0-9]{3}(-?[a-zA-Z0-9]{1,6})?(-?[a-zA-Z0-9]{1})?$/,
    accountNumberPattern: /^[a-zA-Z0-9]{3}(-)?([a-zA-Z0-9]{6})(-?[a-zA-Z0-9]{1})?$/,
    accountNumberWithTypePattern: /^[a-zA-Z0-9]{3}(-?[a-zA-Z0-9]{6})(-?[a-zA-Z0-9]{1})$/,
    fakeAccountNumber: /^[^><\[\]{}~\^]{1,10}$/,

    nettedBroadPattern: /^[bnBN\s]{1,1}$/,
    nettedBroadPatternOptional: /^[bnBN\s]{0,1}$/,

    ncusGrpPattern: /^[^><\[\]{}~\^]{1,10}$/,
    ncusGrpPatternOptional: /^[^><\[\]{}~\^]{0,10}$/,

    dataSrcCodePattern: /^[a-zA-Z0-9]{1,4}$/,
    dataSrcCodePatternOptional: /^[a-zA-Z0-9]{0,4}$/,

    srcCodePattern: /^[a-zA-Z0-9\s/-]{1,12}$/,
    srcCodePatternOptional: /^[a-zA-Z0-9\s/-]{0,12}$/,

    srcCodeDescPattern: /^[^><\[\]{}~\^]{1,80}$/,
    srcCodeDescPatternOptional: /^[^><\[\]{}~\^]{0,80}$/,

    amtTypeCodePattern: /^[a-zA-Z0-9\s/-]{1,3}$/,
    amtTypeCodePatternOptional: /^[a-zA-Z0-9\s/-]{0,3}$/,

    longSideCodePattern: /^[^><\[\]{}~\^]{1,10}$/,
    longSideCodePatternOptional: /^[^><\[\]{}~\^]{0,10}$/,

    shortSideCodePattern: /^[^><\[\]{}~\^]{1,10}$/,
    shortSideCodePatternOptional: /^[^><\[\]{}~\^]{0,10}$/,

    sungardIdPattern: /^[^><\[\]{}~\^]{1,10}$/,
    sungardIdPatternOptional: /^[^><\[\]{}~\^]{0,10}$/,

    glCodePattern: /^[^><\[\]{}~\^]{1,6}$/,
    glCodePatternOptional: /^[^><\[\]{}~\^]{0,6}$/,

    dbcrIndPattern: /^[CDXZ]{1,1}$/,
    dbcrIndPatternOptional: /^[CDXZ]{0,1}$/,

    rptClassPattern: /^[EGNU]{1,1}$/,
    rptClassPatternOptional: /^[EGNU]{0,1}$/,

    pricedIndPattern: /^[PU]{1,1}$/,
    pricedIndPatternOptional: /^[PU]{0,1}$/,

    totalDetailIndPattern: /^[TD]{1,1}$/,
    totalDetailIndPatternOptional: /^[TD]{0,1}$/,

    frequencyCodePattern: /^[FDOMQW]{1,1}$/,
    frequencyCodePatternOptional: /^[FDOMQW]{0,1}$/,

    processStatusCodePattern: /^[NCFLOZ]{1,1}$/,
    processStatusCodePatternOptional: /^[NCFLOZ]{0,1}$/,

    cushionRatePattern: /^[-|+]?\d{1,5}(\.{1}\d{1,2})?$/,
    cushionAmountPattern: /^[-|+]?\d{0,12}(\.{1}\d{1,2})?$/,
    hairCutRatePattern: /^[-|+]?[0]{0,2}(\.{1}\d{1,2})?$/,

    rptTypePattern: /^[a-zA-Z0-9]{1,8}$/,
    rptTypePatternOptional: /^[a-zA-Z0-9]{0,8}$/,

    rptCodePattern: /^[a-zA-Z0-9\s-_]{1,8}$/,
    rptCodePatternOptional: /^[a-zA-Z0-9\s-_]{0,8}$/,

    rptLinePattern: /^[a-zA-Z0-9\s]{1,4}$/,
    rptLinePatternOptional: /^[a-zA-Z0-9\s]{0,4}$/,

    processFrequencyCodePattern: /^[a-zA-Z0-9]{1,1}$/,
    processFrequencyCodePatternOptional: /^[a-zA-Z0-9]{0,1}$/,

    generalDescPattern: /^[^><\[\]{}~\^]{1,80}$/,
    generalDescPatternOptional: /^[^><\[\]{}~\^]{0,80}$/,

    grpIDPattern: /^[a-zA-Z0-9]{1,8}$/,
    grpIDPatternOptional: /^[a-zA-Z0-9]{0,8}$/,

    generalAmountPattern: /^[-|+]?\d{0,18}(\.{1}\d{0,2})?$/,
    viewDirectRptIDPattern: /^[^><\[\]{}~\^]{0,10}$/,
    adjBatchIDPattern: /^[a-zA-Z0-9]{11}$/,
    modifiedByPattern: /^[a-zA-Z0-9]{4,10}$/

});
