#![feature(test)]

extern crate test;

pub fn add_two(a: i32) -> i32 {
  a + 2
}

#[cfg(test)]
mod tests {
  use std::hint::black_box;

  use serde::{Deserialize, Serialize};
  use test::Bencher;

  static N_SAMPLE: usize = 10;
  static SEP: &str = "__RSPACK_CSS_EXTRACT_SEP__";

  use super::*;

  #[derive(Serialize, Deserialize)]
  struct JsonData {
    identifier: String,
    content: String,
    context: String,
    media: String,
    supports: String,
    source_map: String,
  }

  fn prepare_string() -> String {
    "foo".repeat(10000)
  }

  fn json_data() -> String {
    let mut data = vec![];

    for _ in 1..N_SAMPLE {
      data.push(JsonData {
        identifier: prepare_string(),
        content: prepare_string(),
        context: prepare_string(),
        media: prepare_string(),
        supports: prepare_string(),
        source_map: prepare_string(),
      });
    }

    serde_json::to_string::<Vec<JsonData>>(&data).unwrap()
  }

  fn string_data() -> String {
    let mut data = vec![];

    for _ in 1..N_SAMPLE {
      let mut tmp = vec![];
      for _ in 0..6 {
        tmp.push(prepare_string());
      }
      data.push(tmp.join(SEP));
    }

    data.join(SEP).into()
  }

  #[bench]
  fn bench_json(b: &mut Bencher) {
    let data = json_data();

    b.iter(|| {
      black_box({
        serde_json::from_str::<Vec<JsonData>>(&data).unwrap();
      })
    });
  }

  #[bench]
  fn bench_str(b: &mut Bencher) {
    let data = string_data();

    b.iter(|| {
      black_box({
        let mut list = data.split(SEP);

        let mut data = vec![];

        while let Some(identifier) = list.next() {
          data.push(JsonData {
            identifier: identifier.into(),
            content: list.next().unwrap().into(),
            context: list.next().unwrap().into(),
            media: list.next().unwrap().into(),
            supports: list.next().unwrap().into(),
            source_map: list.next().unwrap().into(),
          });
        }
      })
    });
  }
}
