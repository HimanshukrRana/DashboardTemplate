import { HTMLRenderer } from "src/helpers/common/components/HTMLRenderer";
import { IAwards } from "src/stores/index.interface";
import { SectionHeading } from "../atoms/SectionHeading";
import { SectionList } from "../atoms/SectionList";
import { SectionSubtitle } from "../atoms/SectionSubtitle";
import { SectionTitle } from "../atoms/SectionTitle";
import { dateParser } from "src/helpers/utils";

export const AwardSection = ({ awardsReceived }) => {
  return (
    <div className="mb-2">
      <SectionHeading title="Awards" />

      {awardsReceived.map((award, index) => {
        return (
          <div key={index} className="pb-2">
            <SectionTitle label={award.title} />
            <div className="flex justify-between awards-center">
              <SectionSubtitle label={award.awarder} />
              <div>
                <p className="text-xs">{dateParser(award.date)}</p>
              </div>
            </div>
            <SectionList>
              <HTMLRenderer htmlString={award.summary} />
            </SectionList>
          </div>
        );
      })}
    </div>
  );
};

