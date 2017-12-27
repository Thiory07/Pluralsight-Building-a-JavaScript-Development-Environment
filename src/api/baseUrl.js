export default function getBaseUrl(){
  return getQueryStringParametersByName('useMockApi') ? 'http://localhost:3001/' : '/';
}

function getQueryStringParametersByName(name) {
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
