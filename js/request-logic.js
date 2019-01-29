function getContentType(filename) {
  const extension = filename.match(/.*\.([^\.]*)$/)[1];

// 'switch' determina la risposta appropriata per l'estensione del file.
  switch (extension) {
    case 'html':
      return "text/html";
      break;
    case 'css':
      return "text/css";
    case 'jpeg':
    case 'jpg':
      return "image/jpeg";
      break;
    default:
      return 'text/plain';
      break;
  }
}