
// munge-raw
// Use this as the first step when updating the raw data in order to obtain clean data which can be
// maintained.
// Unlikely to be needed again (it overwrites the edited data) but included in case

// The raw data was produced from:
//  http://www.w3.org/html/wg/drafts/html/CR/references.html
// by running the following console script under jQuerify
//  var res = {};
//  $("dt").each(function () { var $dt = $(this), cnt = [], $cur = $dt; while \
//      ($cur.next().is("dd")) { cnt.push($cur.next().html()); $cur = $cur.next(); } \
//      res[$dt.text().replace(/[\[\]]/g, "")] = cnt.join("\n"); })
//  copy(JSON.stringify(res, null, 4))



// XXX
//  eliminate non-normative
//  extract URLs
//  add default fields
//  dump good output
