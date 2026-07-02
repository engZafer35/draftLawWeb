const LAWYER_NAME_PATTERNS: Array<[RegExp, string]> = [
  [/Melisa Ezgi (Aslan|Şimşek|Simsek)/gi, "Zafer Satılmış"],
  [/Avukat Melisa Ezgi Aslan/gi, "Avukat Zafer Satılmış"],
  [/İzmir Boşanma Avukatı/gi, "Avukat Zafer Satılmış"],
  [/İzmir Ceza Hukuku Avukatı/gi, "Avukat Zafer Satılmış"],
  [/İzmir Miras Avukatı/gi, "Avukat Zafer Satılmış"],
  [/İzmir İş Hukuku Avukatı/gi, "Avukat Zafer Satılmış"],
  [/İzmir Ticaret Hukuku Avukatı/gi, "Avukat Zafer Satılmış"],
  [/İzmir Tüketici Hukuku Avukatı/gi, "Avukat Zafer Satılmış"],
  [/İzmir İcra Avukatı/gi, "Avukat Zafer Satılmış"],
  [/İzmir İcra ve İflas Hukuku Avukatı/gi, "Avukat Zafer Satılmış"],
  [/İzmir Gayrimenkul Avukatı/gi, "Avukat Zafer Satılmış"],
  [/Boşanma Avukatı/gi, "Avukat Zafer Satılmış"],
  [/İzmir miras hukuku davalarında/gi, "İzmir miras hukuku davalarında Avukat Zafer Satılmış"],
  [/İzmir'de ceza davalarında avukatlık/gi, "İzmir'de ceza davalarında Avukat Zafer Satılmış"],
  [/İzmir'de iş davası süreçlerinde/gi, "İzmir'de iş davası süreçlerinde Avukat Zafer Satılmış"],
  [/İzmir'de ticari uyuşmazlıklarda avukatlık/gi, "İzmir'de ticari uyuşmazlıklarda Avukat Zafer Satılmış"],
  [/İzmir'de icra ve iflas hukuku alanında avukatlık/gi, "İzmir'de icra ve iflas hukuku alanında Avukat Zafer Satılmış"],
  [/İzmir'de gayrimenkul hukuku alanında avukatlık/gi, "İzmir'de gayrimenkul hukuku alanında Avukat Zafer Satılmış"],
  [/Aslan Hukuk Bürosu/gi, "Avukat Zafer Satılmış"],
  [/© Aslan Hukuk Bürosu/gi, "© Avukat Zafer Satılmış"],
];

export function replaceLawyerNames(text: string): string {
  return LAWYER_NAME_PATTERNS.reduce(
    (result, [pattern, replacement]) => result.replace(pattern, replacement),
    text,
  );
}
