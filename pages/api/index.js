// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export default async function handler(req, res) {
  try {
    const URL = `https://testdia.afip.gob.ar/Dia/ws/wgesTabRef/wgesTabRef.asmx`
    const Token=`PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/Pgo8c3NvIHZlcnNpb249IjIuMCI+CiAgICA8aWQgc3JjPSJDTj13c2FhaG9tbyw
    gTz1BRklQLCBDPUFSLCBTRVJJQUxOVU1CRVI9Q1VJVCAzMzY5MzQ1MDIzOSIgZHN0PSJvdHJvcyIgdW5pcXVlX2lkPSIxMzE2MDc2ODM4IiBnZW5fdGltZT0iMTY2OTM5NDY5MCIgZXhwX3RpbWU9I
    jE2Njk0Mzc5NTAiLz4KICAgIDxvcGVyYXRpb24gdHlwZT0ibG9naW4iIHZhbHVlPSJncmFudGVkIj4KICAgICAgICA8bG9naW4gZW50aXR5PSIzMzY5MzQ1MDIzOSIgc2VydmljZT0id0dlc1RhYlJ
    lZiIgdWlkPSJTRVJJQUxOVU1CRVI9Q1VJVCAyMDQyODIwMTg4NSwgQ049dnVjZSIgYXV0aG1ldGhvZD0iY21zIiByZWdtZXRob2Q9IjIyIj4KICAgICAgICAgICAgPHJlbGF0aW9ucz4KICAgICAgI
    CAgICAgICAgIDxyZWxhdGlvbiBrZXk9IjIwNDI4MjAxODg1IiByZWx0eXBlPSI0Ii8+CiAgICAgICAgICAgIDwvcmVsYXRpb25zPgogICAgICAgIDwvbG9naW4+CiAgICA8L29wZXJhdGlvbj4KPC9
    zc28+Cg==`;
    const Sign=`qxWla3ig3mcoNBzwg20ilUHcCl1rDTmgMymFvpbJI8/hpbgQwUUbua85bYpzFyH9SCE/ePppFF6tp6xCn+odH+mKmvcz0hKNxNr8hZOTbotdiCvdsrfKvp0nw/KwjoOKhATkog+A
    2vsv5lsr7Qe+mIKD2xFdDc7yLp8Dq1185wU=`;
    const Cuit = `20428201885`;
    const xml = 
`<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ar="ar.gov.afip.dia.serviciosweb.wgesTabRef">
<soapenv:Header/>
<soapenv:Body>
   <ar:ConsultarFechaUltAct>
      <!--Optional:-->
      <ar:Autentica>
         <!--Optional:-->
         <ar:Cuit>${Cuit}</ar:Cuit>
         <!--Optional:-->
         <ar:TipoAgente>USUD</ar:TipoAgente>
         <!--Optional:-->
         <ar:Rol>EXTE</ar:Rol>
         <ar:Token>${Token}</ar:Token>
         <ar:Sign>${Sign}</ar:Sign>
      </ar:Autentica>
      <!--Optional:-->
      <ar:IdReferencia>?</ar:IdReferencia>
   </ar:ConsultarFechaUltAct>
</soapenv:Body>
</soapenv:Envelope>`
    const response = await fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'text/xml',
      },
      body: xml,
    });
    console.log(response)
    const data = await response.text();

    res.status(200).json({data})
  } catch (e) {
    console.log(e)
    res.status(200).json({ action: "error", data: e });
  }
}

/*  const afip = new Afip({
    CUIT:'20428201884',
    production: false,
    cert: `MIIDRDCCAiygAwIBAgIIcvD23j6v8OswDQYJKoZIhvcNAQENBQAwODEaMBgGA1UEAwwRQ29tcHV0
    YWRvcmVzIFRlc3QxDTALBgNVBAoMBEFGSVAxCzAJBgNVBAYTAkFSMB4XDTIyMTEyNDE1MDQxMFoX
    DTI0MTEyMzE1MDQxMFowKjENMAsGA1UEAwwEdnVjZTEZMBcGA1UEBRMQQ1VJVCAyMDQyODIwMTg4
    NTCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBAKhKS17b8E5xztZ4GVRt/b9LgCeNK44G
    sNKOdq4NvJcMO5HOr4FR8gL434JtfXKhyM44SvarH77ngV/2Xn21mIe0yVDyZmoegHMs/QjGqBuZ
    pAKnPMGuqO8L9kPMTbGHCK+WVp8ydKiQQwWeGd+5ruAGmqie08ywRopm6P2nlzA84UpJt/yh6AAF
    ksVUf8NAWqyfN7rBHuP69sNPsKk+s4fi1/4Y8hbpRbZ34/NM252iN/IRBMZZx63O41FniJIN7zqB
    /jO4sqiyUB48qY5FUmaagaL4wxBmkZqeJZBzrTSoSFQ8elgnJ/V5JuVhLNY/ats70fonN21mpzSc
    yCmdtKcCAwEAAaNgMF4wDAYDVR0TAQH/BAIwADAfBgNVHSMEGDAWgBSzstP//em63t6NrxEhnNYg
    ffJPbzAdBgNVHQ4EFgQUyTn2c4UuqfJmSV3HmqnMCsrh7rIwDgYDVR0PAQH/BAQDAgXgMA0GCSqG
    SIb3DQEBDQUAA4IBAQBLRyKCOMaKL7/+ueo7mNVb2i2PxEFxU/koDvzsZlNYLGieo29hhWOWZOQe
    rEdisTDxSiJzf1hDtrNIViFZDTjntu1RB2h6ltgKJ+HVr4AWmX0v9nf7XanoKyeO+gqdwpKadZWe
    SC/mFt/Om71kDPL1cFLeBjNxq/Im5aegtmnMiMXY0zV1cChO/uhyOAS3MMQNhf1FJGaBlTbXzDbP
    eeaEUFJp58dFEtNVibtyn9FxVrCBEk5HhB19hOHY54vtckZgaHoPlmL5g/1PF9ERbpFZ4Z2/n9y1
    b8rTqnqnxia3GTyXeD2I6UenAPYn/pd1hD6B6dbUeBU4MA/aOyPMmsZt`,
    key:`MIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCoSkte2/BOcc7W
    eBlUbf2/S4AnjSuOBrDSjnauDbyXDDuRzq+BUfIC+N+CbX1yocjOOEr2qx++54Ff
    9l59tZiHtMlQ8mZqHoBzLP0IxqgbmaQCpzzBrqjvC/ZDzE2xhwivllafMnSokEMF
    nhnfua7gBpqontPMsEaKZuj9p5cwPOFKSbf8oegABZLFVH/DQFqsnze6wR7j+vbD
    T7CpPrOH4tf+GPIW6UW2d+PzTNudojfyEQTGWcetzuNRZ4iSDe86gf4zuLKoslAe
    PKmORVJmmoGi+MMQZpGaniWQc600qEhUPHpYJyf1eSblYSzWP2rbO9H6JzdtZqc0
    nMgpnbSnAgMBAAECggEABsIZCGxXrabHXM3XjTrvi5I/dBcouRw5V0ijqSC3F+/E
    p/nUtXec0D69/GcOOHTDyM2c67lP3eLpIKPsWSsE6ZTlLWwr7bYKMtXggXeM17Ln
    Ubif6X1B89DsqP4C3rlirBPNqGNRKQBww0B9SdfolxQyJh8JYrkaKW5cNpeCLEyC
    Ny9Jxstg6fo4nA0EKK1RZAKf4bX+iiovUgzZboo3QJqYBiWSYSoFr0MQSYdWOhY9
    fZUzCmvHnHP0l1fZeQEPhcATqxoU2NfDqY43QwghgUm9/OMT6Rq5ZOpBLpiGQ07K
    sUP7Zdap145xVd82iNOx2uZ2O83qG3+0rOxLg1KdxQKBgQDcrtqeX0onKHFR4KOH
    1AcGRHsozrtOGi4AIid+S3/F8VBNYEpDUb+bRjDFtaOPAuer3d9sXjvJ6jk/v5dd
    w05ByburVQs0IpCjKHM8PtP+1C2U9AW72Xs3rVKpS5PRpgrJfnj6JOmMqOB1OWvn
    sbJInTnoHqaZEWXrWXKP21ZhBQKBgQDDOPaeM97CxOPYRL/+G8rXBodAnF7C6Whv
    h7yVtNp9+LN0gzoZa67w8sZLbielJO/szJ3UTCcySKDFqpMEpKS/RpDZWGM3hhaa
    PKC8rN2FK/FtzCw6DZlBSaewQi3uWLz6iprsTSxruoykm1o+/qA6z10fxKEhu1R7
    qUSaS2FeuwKBgBREjtmKwOG1yiqN6hb4dyixM2p9CiDTMLRcbqofvv1r+0cP9+IU
    6PcWzDXsR7hDuQlE2Fc4lF8n/tgG/Zzj6hUKtQy4Q84m+oexmFvJHWlDDWinvLsS
    70kexv+7bDkN+eGllvDKYRTFEdBSVMGzxT78Caxy3DQkr+qcjXP+3gENAoGACWj6
    gj+v0iWZcfhGZOJEEb9Pz6555t1HWnDphzHTglT1mX0l1MnbAeRB6KrjoFM6eWiX
    hv8wuHzFuyFwur2Q72NgYgmfprKA7mhTuyR9/QhUN92qmBXFuF7rhVR7UEzYtx7t
    PsytgnfYhaqzW+v8HzmVnI1m0vBrrxZGp0VQ6TcCgYA1Funo1sG0nnn3NpqPXfmh
    aIdQ8OOYRiauuL79n5D4ba2I7vs2DNygniDkxE2bfWFLav4dN9d183jH126Ja5Pj
    PmvbJk1NM5R4AtX2ngo46Iyg4EVX3rM1kojCWcCsMTDYpxUZYj19MI4p+MNNeqKD
    SNQhsVvsXVjXq+aIJLQcRQ==`
});
  res.status(200).json({action:"complete",data:afip}); */