---
layout: mydefault
---
<ul class="pagination">
  {% for element in site.periodic_table_elements %}
    {% if element <> page %}
    <li>
        <a href="{{ element.url | relative_url}}">
            {{ element.atomic_number }} {{ element.symbol }}
        </a>
    </li>
    {% else %}
    <li>
        <a style="border-color: transparent; color: red;">{{ element.atomic_number }} {{ element.symbol }}</a>
    </li>
    {% endif %}
  {% endfor %}
</ul>

<div  style="background-color: #{{ page.color }}; padding: 0 2px 0 5px;">
<a style="float: right;" href=" {{ '/periodic_table_elements.html' | relative_url }}" >Elements</a>
<h1>{{ page.atomic_name | capitalize | append: ' ( ' | append: page.symbol | append: ' )'}}</h1>

{% assign kelvin_unit = " K" %}
{% assign density_unit = " g/L" %}
{% assign heat_unit = " kJ/mol" %}
{% assign heat_capacity_unit = " kJ/(mol·K)" %}
{% assign pauling = " Pauling scale: " %}
{% assign radius_unit = " pm (1×10<sup>−12</sup> m)" %}
{% assign speed_of_voice_unit = " m/s" %}
{% assign thermal_expansion_unit = " µm/(m·K)" %}
{% assign thermal_conductivity_unit = " W/(m·K)" %}

<ul class="b8t_list">
    <li>
    Atomic number: 
        {% if page.atomic_number %}
            {{ page.atomic_number }}
        {% endif %}
    </li>
    <li>
    Appearance: 
        {% if page.appearance %}
            {{ page.appearance }}
        {% endif %}
    </li>
    <li>
    Standard atomic weight: 
        {% if page.saw %}
            {{ page.saw }}
        {% endif %}
    </li>
    <li>
    Group: 
        {% if page.group %}
            {{ page.group }}
        {% endif %}
    </li>
    <li>
    Period: 
        {% if page.period %}
            {{ page.period }}
        {% endif %}
    </li>
    <li>
    Electron configuration: 
        {% if page.shell_pos %}
            {% assign i = page.shell_nr | minus: 1 %}
            {% for index in (0..i) %}
                {{ page.shell_pos[index] }}{{ page.blocks[index] }}<sup>{{ page.electrons[index] }}</sup>
            {% endfor %}
        {% endif %}
    </li>
    <li>
    Element category: 
        {% if page.element_category %}
            {{ page.element_category }}
        {% endif %}
    </li>
    <li>
    Melting point: 
        {% if page.melting_point %}
            {{ page.melting_point | append: kelvin_unit }}
        {% endif %}
    </li>
    <li>
    Boiling point: 
        {% if page.boiling_point %}
            {{ page.boiling_point | append: kelvin_unit }}
        {% endif %}
    </li>
    <li>
    Sublimation point: 
        {% if page.sublimation_point %}
            {{ page.sublimation_point | append: kelvin_unit }}
        {% endif %}
    </li>
    <em>Standard Temperature ( 273.15{{ kelvin }} ) and Pressure ( 1 bar = 10<sup>5</sup> Pa )</em> 
    <li>
    Phase at STP: 
        {% if page.stp_phase %}
            {% if page.stp_phase == "gas" and page.atom_in_molecule > 1 %}
                ( {{ page.symbol }}<sub>{{ page.atom_in_molecule }}</sub> )
            {% endif %}
            {{ page.stp_phase }} 
        {% endif %}
    </li>
    <li>
    Density at STP: 
        {% if page.stp_densityr %}
            {% if page.stp_phase == "gas" and page.atom_in_molecule > 1 %}
                ( {{ page.symbol }}<sub>{{ page.atom_in_molecule }}</sub> )
            {% endif %}
            {{ page.stp_density | append: density_unit }}
        {% endif %}
    </li>
    <li>
    Heat of fusion:
        {% if page.heat_of_fusion %}
        {% if page.stp_phase == "gas" and page.atom_in_molecule > 1 %}
            ( {{ page.symbol }}<sub>{{ page.atom_in_molecule }}</sub> )
        {% endif %}
        {{ page.heat_of_fusion }}{{ heat_unit }}
        {% endif %}
    </li>
    <li>
    Heat of vaporization: 
        {% if page.heat_of_vaporization %}
            {% if page.stp_phase == "gas" and page.atom_in_molecule > 1 %}
                ( {{ page.symbol }}<sub>{{ page.atom_in_molecule }}</sub> )
            {% endif %}
            {{ page.heat_of_vaporization }}{{ heat_unit }}
        {% endif %}
    </li>
    <li>
    Molar heat capacity: 
        {% if page.molar_heat_capacity %}
            {% if page.stp_phase == "gas" and page.atom_in_molecule > 1 %}
               ( {{ page.symbol }}<sub>{{ page.atom_in_molecule }}</sub> )
            {% endif %}
            {{ page.molar_heat_capacity }}{{ heat_capacity_unit }}
        {% endif %}
    </li>
    <li>
    Oxidation states: 
        {% if page.oxidation_states %}
            {{ page.oxidation_states }}
        {% endif %}
    </li>
    <li>
    Electronegativity: 
        {% if page.electronegativity %}
            {{ pauling }}{{ page.electronegativity }}
        {% endif %}
    </li>
    <li>
    Covalent radius: 
        {% if page.covalent_r %}
            {{ page.covalent_r }}{{ radius_unit }}
        {% endif %}
    </li>
    <li>
    Van der Waals radius: 
        {% if page.waals_r %}
            {{ page.waals_r }}{{ radius_unit }}
        {% endif %}
    </li>
    <li>
    Crystal structure: 
        {% if page.crystal_structure %}
            {{ page.crystal_structure }}
        {% endif %}
    </li>
    <li>
    Speed of sound: 
        {% if page.speed_of_sound %}
            {{ page.speed_of_sound }}{{ speed_of_voice_unit }} ({{ page.condition_speed_of_sounds }})
        {% endif %}
    </li>
    <li>
    Thermal expansion: 
        {% if page.thermal_expansion %}
            {{ page.thermal_expansion }}{{ thermal_expansion_unit }}
        {% endif %}
    </li>
    <li>
    Thermal conductivity: 
        {% if page.thermal_conductivity %}
            {{ page.thermal_conductivity }}{{ thermal_conductivity_unit }}
        {% endif %}
    </li>
</ul>
</div>

{{ content }}


