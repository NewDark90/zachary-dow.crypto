import { Component, Host, h, ComponentInterface } from '@stencil/core';
import { IconLink } from '../../env';
import stencilIcon from "ionicons/dist/svg/logo-stencil.svg";
import {
    siTypescript,
    siJavascript,
    siJava,
    siHtml5,
    siCss3,
    siDotnet,
    siCplusplus,
    siCsharp,
    siJest,
    siReact,
    siRust,
    siSolidity,
    siAzuredevops,
    siSass,
    siAssemblyscript,
    siMicrosoftsqlserver,
    siGit,
    siNodedotjs,
    siWebassembly,
    siIpfs,
    siPowershell,
    siSvg,
    siWindows,
    siGo,
} from 'simple-icons/icons';

@Component({
    tag: 'content-skills',
    styleUrl: 'content-skills.scss',
    shadow: true,
})
export class ContentSkills implements ComponentInterface
{

    private getSkillsets()
    {
        const skillsets: { display: string, list: Array<IconLink & {color?: string}> }[] = [
            {
                display: "Expert",
                list: [
                    { name: siTypescript.title, icon: siTypescript.svg, color: siTypescript.hex },
                    { name: siJavascript.title, icon: siJavascript.svg, color: siJavascript.hex },
                    { name: siHtml5.title, icon: siHtml5.svg, color: siHtml5.hex  },
                    { name: siCss3.title, icon: siCss3.svg, color: siCss3.hex  },
                    { name: siSass.title, icon: siSass.svg, color: siSass.hex },
                    { name: "Stencil", icon: stencilIcon  },
                    { name: siCsharp.title, icon: siCsharp.svg, color: siCsharp.hex  },
                ]
            }, {
                display: "Proficient",
                list: [
                    { name: siNodedotjs.title, icon: siNodedotjs.svg, color: siNodedotjs.hex  },
                    { name: siDotnet.title, icon: siDotnet.svg, color: siDotnet.hex  },
                    { name: siGit.title, icon: siGit.svg, color: siGit.hex  },
                    { name: siReact.title, icon: siReact.svg, color: siReact.hex  },
                    { name: "SQL Server", icon: siMicrosoftsqlserver.svg, color: siMicrosoftsqlserver.hex  },
                    { name: siWindows.title, icon: siWindows.svg, color: siWindows.hex  },
                ]
            }, {
                display: "Familiar",
                list: [
                    { name: siJest.title, icon: siJest.svg, color: siJest.hex  },
                    { name: siPowershell.title, icon: siPowershell.svg, color: siPowershell.hex  },
                    { name: siJava.title, icon: siJava.svg, color: siJava.hex  },
                    { name: siCplusplus.title, icon: siCplusplus.svg, color: siCplusplus.hex  },
                    { name: siSvg.title, icon: siSvg.svg, color: siSvg.hex  },
                    { name: siAzuredevops.title, icon: siAzuredevops.svg, color: siAzuredevops.hex  },
                ]
            }, {
                display: "Learning",
                list: [
                    { name: siRust.title, icon: siRust.svg, color: siRust.hex  },
                    { name: siSolidity.title, icon: siSolidity.svg, color: siSolidity.hex  },
                    { name: siAssemblyscript.title, icon: siAssemblyscript.svg, color: siAssemblyscript.hex  },
                    { name: siWebassembly.title, icon: siWebassembly.svg, color: siWebassembly.hex  },
                    { name: siIpfs.title, icon: siIpfs.svg, color: siIpfs.hex  },
                    { name: siGo.title, icon: siGo.svg, color: siGo.hex  },
                ]
            }
        ];
        return skillsets;
    }

    render()
    {
        const skillsets = this.getSkillsets();
        return (
            <Host>
                {
                    skillsets.map((skillset) =>
                    {
                        return (
                            <section>
                                <h4 class="skillset-title">{ skillset.display }</h4>
                                <div class="skillset">
                                    { skillset.list.map((skill) =>
                                    {
                                        return (
                                            <div class="skill" style={{"borderColor": `#${skill.color}` }}>
                                                <div class="icon" innerHTML={ skill.icon }></div>
                                                <span class="display">
                                                    { skill.name }
                                                    { skill.name === "JavaScript" && <a href="https://www.youtube.com/watch?v=Uo3cL4nrGOk" target="_blank" rel="noreferrer" >.</a> }
                                                </span>
                                            </div>
                                        );
                                    }) }
                                </div>
                            </section>
                        )
                    })
                }
            </Host>
        );
    }

}
