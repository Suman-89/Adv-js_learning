var hiringCompany = execution.getVariable('psHiringCompanyName');

if(hiringCompany == 'Bardwood'){
    execution.setVariable('Under AM Review',psRecaStatus);
}else{
    execution.setVariable('Interview Planning',psRecaStatus);
}